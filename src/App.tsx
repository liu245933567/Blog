import React from 'react';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Comic, Face, Holiday, Home, QRcode, Room } from '@/route';
import '@/style/index.less';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter basename="/blog/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Holiday />} />
          <Route path="/qrcode" element={<QRcode />} />
          <Route path="/face" element={<Face />} />
          <Route path="/room" element={<Room />} />
          <Route path="/comic" element={<Comic />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
