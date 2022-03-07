import React from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home, QRcode } from '@/route';
import '@/style/index.less';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qrcode" element={<QRcode />} />
        </Routes>
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;
