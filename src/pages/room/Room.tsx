import React from 'react';

type SizeProps = {
  title: string;
  width: number | string;
  height: number | string;
};

function Size({ title, width, height }: SizeProps) {
  return (
    <div className="text-justify">
      <div>{title}</div>
      <div>
        {width} * {height}
      </div>
    </div>
  );
}

export function Room() {
  return (
    <div className="room">
      <div className="room__guizi">
        <Size title="衣柜" width="58" height="179" />
      </div>
      <div className="room__chuang" />
    </div>
  );
}
