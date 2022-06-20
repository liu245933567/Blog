import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Statistic } from 'antd';
import './index.less';

const { Countdown } = Statistic;

dayjs.extend(relativeTime);

export function Holidy() {
  return (
    <div className="holiday">
      <div className="holiday__img" />
      <div className="holiday__time">
        <Countdown
          title="摸鱼提醒：今天是4月15日，周五的上午
          口号是摸鱼有理，划水无罪。工人阶级们，咱们联合起来，一起徜徉在无尽的鱼塘吧 "
          value="2022-04-02 18:30"
          format="D 天 H 时 m 分 s 秒"
        />
      </div>
    </div>
  );
}
