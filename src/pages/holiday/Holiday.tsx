import React from 'react';
import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Statistic } from 'antd';
import './index.less';
import datList from './data.json';

const { Countdown } = Statistic;

enum DayeType {
  /** 正常工作日 */
  WORK,
  /** 周末 */
  WEEKEND,
  /** 节假日 */
  HOLIDAY
}

type DataItem = {
  date: string;
  type: DayeType;
  remark: null;
};

const data = datList as DataItem[];

dayjs.extend(localizedFormat);

const today = dayjs();

// const tar = data.reduce(() => {}, )

export function Holidy() {
  return (
    <div className="holiday">
      <div className="holiday__img" />
      <div className="holiday__time">
        <Countdown
          title={`摸鱼提醒：今天是 ${today.format('LLLL')}
           口号是摸鱼有理，划水无罪。工人阶级们，咱们联合起来，一起徜徉在无尽的鱼塘吧 `}
          value="2022-04-02 18:30"
          format="D 天 H 时 m 分 s 秒"
        />
      </div>
    </div>
  );
}
