import * as React from "react";
import { Card, CardHeader } from "@material-ui/core";
import ImageDetection from "./FaceApi";
import VideoDetection from "./FaceApiVideo";

export const StreamingRecognition = (props) => {
  return (
    <ImageDetection />
  )
};

export const VideoDemoRecognition_1 = (props) => {
  return(
    <VideoDetection src="Useforvideo.mp4" />
  )
};
export const VideoDemoRecognition_2 = (props) => {
  return(
      <>
        <VideoDetection src="srcback.mp4" />
      </>
    )
};
export const VideoDemoRecognition_3 = (props) => {
  return(
    <VideoDetection src="cropped.mp4" />
  )
};


