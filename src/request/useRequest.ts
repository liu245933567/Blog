import { useState } from 'react';
import { omit } from 'lodash-es';
import { BaseResponseBack, ResponseCode } from './request';

type Option = {
  /** 下一次请求执行前，清除响应数据 */
  clearResponse?: boolean;
};

/**
 *
 * @param feachCall 异步请求方法
 * @param options 配置项
 * @returns
 */
export function useRequest<
  F extends (param: any) => Promise<BaseResponseBack<any>>
>(feachCall: F, option: Option = {}) {
  type Req = Parameters<F>[0];

  type Res = ReturnType<F> extends Promise<BaseResponseBack<infer R>> ? R : any;

  type SaveData = Res;

  const { clearResponse } = option;

  const [loading, setLoading] = useState(false);

  const [requestData, setRequestData] = useState<Req>();

  const [responseData, setResponse] = useState<SaveData>();

  const toRequest = async (param: Req) => {
    setRequestData(param);
    setLoading(true);
    if (clearResponse) {
      setResponse(undefined);
    }
    const res = await feachCall(param);

    setLoading(false);
    if (res.code === ResponseCode.success) {
      setResponse(omit(res, ['code', 'message']) as any);
    }

    return res as Res;
  };

  const reset = () => {
    setRequestData(undefined);
    setResponse(undefined);
    setLoading(false);
  };

  return {
    loading,
    reset,
    responseData,
    requestData,
    toRequest
  };
}
