import React from 'react';
import { Spin } from 'antd';

// 这里的路径用了./*/*就是加载所有当前文件平级的文件夹下的所有文件
const modules = import.meta.glob('../pages/*/index.tsx');

// function LoadPage({ data }) {
//   const Home = '/home/index.tsx';
//   const URL = data ? (data.URL ? data.URL : Home) : Home;
//   // 使用data.URL拼接url去匹配modules里面的key，得到对应的value就是异步加载组件的函数
//   const Compontents = React.lazy(modules[`.${URL}`] as any);
//   return (
//     <React.Suspense
//       fallback={
//         <div
//           style={{
//             height: '100%',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}
//         >
//           <Spin size="large" />
//         </div>
//       }
//     >
//       <Compontents />
//     </React.Suspense>
//   );
// }

export const Home = loadable(() => import('@/pages/home'));

// export const QRcode = loadable(() => import('@/pages/qrcode'));
export function QRcode() {
  // 使用data.URL拼接url去匹配modules里面的key，得到对应的value就是异步加载组件的函数
  const Compontents = React.lazy(modules['../pages/qrcode/index.tsx'] as any);
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

export const Face = loadable(() => import('@/pages/face'));
