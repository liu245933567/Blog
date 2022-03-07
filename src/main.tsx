import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import dayjsLocal from 'dayjs/locale/zh-cn';
import App from './App';

dayjs.locale(dayjsLocal);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);
