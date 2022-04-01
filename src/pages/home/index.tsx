import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Statistic } from 'antd';
import './index.less';

const { Countdown } = Statistic;

dayjs.extend(relativeTime);

export default function Home() {
  return (
    <div className="home">
      <div className="home__img" />
      <div className="home__time">
        <Countdown
          title="距离放假"
          value="2022-04-02 18:30"
          format="D 天 H 时 m 分 s 秒"
        />
      </div>
    </div>
  );
}
