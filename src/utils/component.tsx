import loadableRe from '@loadable/component';
import React from 'react';
import { Spin } from 'antd';

export const loadable = loadableRe;

export function loadPage(aa: any) {
  function Page() {
    const Compontents = React.lazy(aa);

    return (
      <React.Suspense
        fallback={
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Spin size="large" />
          </div>
        }
      >
        <Compontents />
      </React.Suspense>
    );
  }

  return Page;
}
