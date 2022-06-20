import React from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Face, Home, QRcode, Room } from '@/route';
import '@/style/index.less';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter basename="/blog/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qrcode" element={<QRcode />} />
          <Route path="/face" element={<Face />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
