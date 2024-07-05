import type { Post } from '../types';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import rTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
import { useClipboard } from '@vueuse/core';
const { copy, isSupported } = useClipboard();

import { toast, type ToastOptions } from 'vue3-toastify';

// 全局使用中文
dayjs.locale('zh-cn');
dayjs.extend(rTime);
dayjs.extend(duration);

/**
 * 文字格式转换
 * @param se
 * @returns
 */
export function formatSearch(se: string) {
  if (typeof se !== 'undefined') {
    se = se.substr(1);
    const arr = se.split('&');
    const obj: Record<string, string> = {};

    arr.forEach((item: any) => {
      const newarr = item.split('=');
      if (newarr[0]) {
        obj[newarr[0]] = decodeURIComponent(newarr[1]);
      }
    });
    return obj;
  }
}

/** 对时间进行格式化 */
export function formatTime(data: any, type = 'YYYY-MM-DD') {
  return dayjs(data).format(type);
}

/** 对时间进行格式化 */
export const relativeTime = (value: any) => {
  return dayjs(value).fromNow();
};

/** 人性化时间格式 */
export const durationTime = (value: any) => {
  return dayjs.duration(value);
};

/** 随机一文 */
export function randomOne(post: Post[]) {
  const data: any = post[getRandomInt(post.length)];
  return data;
}

/** 获取所有 tag */
export function initTags(post: Post[]) {
  const data: any = {};
  for (let index = 0; index < post.length; index++) {
    const element = post[index];
    const tags = element?.frontmatter?.tags;
    if (tags) {
      tags.forEach((item: any) => {
        if (data[item]) {
          data[item].push(element);
        } else {
          data[item] = [];
          data[item].push(element);
        }
      });
    }
  }
  return data;
}

/** 获取所有分类 */
export function initCats(post: Post[]) {
  const data: any = {};
  for (let index = 0; index < post.length; index++) {
    const element = post[index];
    const categories = element?.frontmatter?.categories;
    if (categories) {
      categories.forEach((item: any) => {
        if (data[item]) {
          data[item].push(element);
        } else {
          data[item] = [];
          data[item].push(element);
        }
      });
    }
  }
  return data;
}

/** 根据tag获取相关文章 */
export function relatebyTags(post: Post[], article: any) {
  const data: any = {
    relate: [],
  };
  for (let index = 0; index < post.length; index++) {
    const element = post[index];
    const tags = element?.frontmatter?.tags;
    const title = element?.frontmatter?.title;
    if (tags) {
      tags.forEach((item: any) => {
        if (article.frontmatter.tags.includes(item) && title !== article.frontmatter.title) {
          data['relate'].push(element);
        }
      });
    }
  }
  let uniqueArr = Array.from(new Set(data.relate));
  return uniqueArr;
}

/**
 * 获取所有存档
 * @param post
 * @returns
 */
export function initArchives(post: Post[]) {
  let data = {} as any;
  for (let index = 0; index < post.length; index++) {
    const element = post[index];
    if (element?.frontmatter?.date) {
      let y = new Date(element.frontmatter.date).getFullYear();
      let m = new Date(element.frontmatter.date).getMonth() + 1 + '月';
      if (!data[y]) {
        data[y] = {};
      }
      if (!data[y][m]) {
        data[y][m] = [];
      }
      data[y][m].push(element);
    }
  }
  return data;
}

//
const pattern =
  /[a-zA-Z0-9_\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g;

export function countWord(data: string) {
  const m = data.match(pattern);
  let count = 0;
  if (!m) {
    return 0;
  }
  for (let i = 0; i < m.length; i += 1) {
    if (m[i].charCodeAt(0) >= 0x4e00) {
      count += m[i].length;
    } else {
      count += 1;
    }
  }
  return count;
}

/**
 * 通用随机获取方法
 * @param max
 * @returns
 */
export const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

/**
 * 通用复制提示方式
 * @param text
 * @returns
 */
export function handleCopy(text: string) {
  if (!isSupported) {
    toast('您的浏览器不支持Clipboard API', {
      autoClose: 3000,
      type: 'error',
      hideProgressBar: true,
    } as ToastOptions);
    return;
  }
  copy(text);
  toast('复制成功', {
    autoClose: 2000,
    type: 'success',
    hideProgressBar: true,
  } as ToastOptions);
}
