import {
  nets,
  SsdMobilenetv1Options,
  TinyFaceDetectorOptions
} from 'face-api.js';

const SSD_MOBILENETV1 = 'ssd_mobilenetv1';

const TINY_FACE_DETECTOR = 'tiny_face_detector';

const selectedFaceDetector = SSD_MOBILENETV1;

const minConfidence = 0.5;

const inputSize = 512;

const scoreThreshold = 0.5;

function getCurrentFaceDetectionNet() {
  if (selectedFaceDetector === SSD_MOBILENETV1) {
    return nets.ssdMobilenetv1;
  }
  if (selectedFaceDetector === TINY_FACE_DETECTOR) {
    return nets.tinyFaceDetector;
  }
  return nets.tinyFaceDetector;
}

export function isFaceDetectionModelLoaded() {
  return !!getCurrentFaceDetectionNet().params;
}

export function getFaceDetectorOptions() {
  return selectedFaceDetector === SSD_MOBILENETV1
    ? new SsdMobilenetv1Options({ minConfidence })
    : new TinyFaceDetectorOptions({ inputSize, scoreThreshold });
}
