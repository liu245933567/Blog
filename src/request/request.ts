import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { merge } from 'lodash-es';

export enum ResponseCode {
  success = 0
}

export interface BaseResponse {
  code: ResponseCode;
  message: string;
}

export type BaseResponseBack<T> = BaseResponse & {
  data: T;
};

const API_PATH = 'http://dev.flycua.com:3001';

type CustomConfig = {
  /** 隐藏报错 */
  hideErrorMessage?: boolean;
};

/** 接口请求公共类 */
class Request {
  constructor() {
    this.axiosIns = axios.create({
      baseURL: API_PATH,
      withCredentials: true,
      timeout: 180000
    });

    this.axiosIns.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        Promise.reject(err);
      }
    );

    this.axiosIns.interceptors.response.use(
      this.responseFulfilled,
      this.responseRejected
    );
  }

  axiosIns: AxiosInstance;

  private responseFulfilled(response: AxiosResponse<BaseResponse>) {
    return response;
  }

  private responseRejected(error: any) {
    if (error.response.data.btCommonRes) {
      return Promise.resolve({
        data: {
          error,
          btCommonRes: error.response.data.btCommonRes
        }
      });
    }
    let message = 'Error';
    if (error.message) {
      if (error.message.indexOf('timeout') !== -1) {
        message = '请求超时！';
      } else if (error.response) {
        switch (error.response.status) {
          case 500:
            message = '请求失败！';
            break;
          case 400:
            message = '参数错误！';
            break;
          default:
            message = `网络连接失败！ERROR:${error.response.status}`;
        }
      } else {
        message = error.message;
      }
    }
    if (error.response?.data?.message) {
      message = error.response.data.message;
    }
    return Promise.resolve({
      data: {
        error,
        btCommonRes: {
          isOk: false,
          errorCode: error.response && error.response.status,
          errorMsg: message,
          serialNo: ''
        }
      }
    });
  }

  async post<Res = Record<string, unknown>>(
    url: string,
    param: unknown = {},
    config?: AxiosRequestConfig & CustomConfig
  ) {
    const { data } = await this.axiosIns.post<Res & BaseResponse>(
      url,
      param,
      merge(
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        },
        config
      )
    );

    return data;
  }

  async get<Res = any>(
    url: string,
    params: Record<string, string> = {},
    config: AxiosRequestConfig & CustomConfig = {}
  ) {
    const { data } = await this.axiosIns.get<BaseResponseBack<Res>>(url, {
      ...config,
      params
    });

    return data;
  }
}

export const request = new Request();

export default request;
