import React, { useState } from 'react';
import {
  utils,
  detectAllFaces,
  matchDimensions,
  resizeResults,
  draw
} from 'face-api.js';
import { useMount } from 'ahooks';
import { Button, Select, Space } from 'antd';
import { isFaceDetectionModelLoaded, getFaceDetectorOptions } from './utils';

const withBoxes = true;

const withFaceLandmarks = true;

export default function Face() {
  const videoEl = React.useRef<HTMLVideoElement | null>();
  const canvasEl = React.useRef<HTMLCanvasElement | null>();
  const [time, setTime] = useState('');
  const [fps, setFps] = useState('');
  const [selectedFaceDetector, setSelectedFaceDetector] =
    useState('ssd_mobilenetv1');
  const [inputSizeSelect, setInputSizeSelect] = useState('512');
  const [forwardTimes, setForwardTimes] = useState<number[]>([]);

  const stream = React.useRef<MediaStream>();

  const updateTimeStats = (timeInMs: number) => {
    const times = [timeInMs].concat(forwardTimes).slice(0, 30);
    const avgTimeInMs =
      times.reduce((total, t) => total + t) / forwardTimes.length;
    setTime(`${Math.round(avgTimeInMs)} ms`);
    setFps(`${utils.round(1000 / avgTimeInMs)}`);
    setForwardTimes(times);
  };

  // const changeFaceDetector = async (detector: string) => {
  //   selectedFaceDetector = detector;
  //   const faceDetectorSelect = $('#selectFaceDetector');
  //   faceDetectorSelect.val(detector);
  //   faceDetectorSelect.material_select();

  //   $('#loader').show();
  //   if (!isFaceDetectionModelLoaded()) {
  //     await getCurrentFaceDetectionNet().load('/');
  //   }

  //   $(`#${detector}_controls`).show();
  //   $('#loader').hide();
  // };

  const onPlay = async () => {
    if (!videoEl.current || !canvasEl.current) {
      return;
    }
    if (
      !videoEl.current.currentTime ||
      videoEl.current.paused ||
      videoEl.current.ended ||
      !isFaceDetectionModelLoaded()
    ) {
      setTimeout(() => onPlay());
      return;
    }

    const options = getFaceDetectorOptions();
    const ts = Date.now();
    const drawBoxes = withBoxes;
    const drawLandmarks = withFaceLandmarks;

    let task = detectAllFaces(videoEl.current, options);
    task = withFaceLandmarks ? task.withFaceLandmarks() : task;
    const results = await task;

    updateTimeStats(Date.now() - ts);

    const dims = matchDimensions(canvasEl.current, videoEl.current, true);

    const resizedResults = resizeResults(results, dims);
    if (drawBoxes) {
      draw.drawDetections(canvasEl.current, resizedResults);
    }
    if (drawLandmarks) {
      draw.drawFaceLandmarks(canvasEl.current, resizedResults);
    }

    setTimeout(() => onPlay());
  };

  const startVideo = () => {
    window.navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((s) => {
        if (videoEl.current) {
          stream.current = s;
          videoEl.current.srcObject = s;
          onPlay();
        }
      })
      .catch((err) => console.error(err));
  };

  const stopVideo = () => {
    stream.current?.getTracks().forEach((i) => i.stop());
    if (!videoEl.current) {
      return;
    }

    videoEl.current.pause();
    videoEl.current.srcObject = null;
  };

  useMount(() => {
    // startVideo();
  });

  return (
    <div>
      <Space>
        <Button onClick={startVideo}>开启摄像头</Button>
        <Button onClick={stopVideo}>关闭摄像头</Button>

        <Select
          value={selectedFaceDetector}
          onChange={(value) => setSelectedFaceDetector(value)}
        >
          <Select.Option value="ssd_mobilenetv1">ssd_mobilenetv1</Select.Option>
          <Select.Option value="tiny_face_detector">
            tiny_face_detector
          </Select.Option>
        </Select>

        <Select
          value={inputSizeSelect}
          onChange={(value) => setInputSizeSelect(value)}
        >
          <Select.Option value="160">160 x 160</Select.Option>
          <Select.Option value="224">224 x 224</Select.Option>
          <Select.Option value="320">320 x 320</Select.Option>
          <Select.Option value="416">416 x 416</Select.Option>
          <Select.Option value="512">512 x 512</Select.Option>
          <Select.Option value="608">608 x 608</Select.Option>
        </Select>
      </Space>

      <div>{time}</div>
      <div>{fps}</div>

      <video
        ref={(el) => {
          videoEl.current = el;
        }}
        width="720"
        height="560"
        autoPlay
        muted
      />
      <div>
        <canvas
          ref={(el) => {
            canvasEl.current = el;
          }}
        />
      </div>
    </div>
  );
}
