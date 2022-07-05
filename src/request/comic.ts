import { ComicBase } from '@/types';
import { request } from './request';

/** 机场查询 */
export const queryComic = async (searchString: string) => {
  const res = await request.get<ComicBase[]>('/comic/search', { searchString });
  return res;
};
