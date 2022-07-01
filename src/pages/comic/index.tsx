import { Input } from 'antd';
import React from 'react';
import { useRequest, queryComic } from '@/request';

const { Search } = Input;

export default function ComicHome() {
  const { responseData, loading, toRequest } = useRequest(queryComic);

  return (
    <div>
      <div>
        <Search
          placeholder="输入漫画名称"
          enterButton="搜索"
          size="large"
          loading={loading}
          onSearch={() => {}}
        />
      </div>
    </div>
  );
}
