import * as faceApi from "face-api.js";
import React, { useState, useEffect } from 'react';

class FaceApi extends React.Component{
video = React.createRef();
canvas = React.createRef();

  componentDidMount() {
      this.run();
  }
  
  run = async () => {
    try {
      await faceApi.nets.tinyFaceDetector.loadFromUri('./weights');
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }
      });

      this.video.current.srcObject = this.mediaStream;
    } catch (e) {
      
    }
  };


options = new faceApi.TinyFaceDetectorOptions({
  inputSize: 512,
  scoreThreshold: 0.5
});
onPlay = async () => {
  if (
    this.video.current.paused ||
    this.video.current.ended ||
    !faceApi.nets.tinyFaceDetector.params
  ) {
    const canvas = faceapi.createCanvasFromMedia(this.video);
    const size = {width: this.video.width, height: this.video.height}


    const results = await faceApi.detectAllFaces(this.video.current, options)
    const resizedResults = faceapi.resizeResults(results,displaySize)
    canvas.getContext('2d').clearRect(0,0,canvas.width, canvas.height)
    faceApiapi.draw.drawDetections(canvas, resizedResults)
    setTimeout(() => this.onPlay(), 1000);
    return;
  };
}
//   if (result) {
//     faceApi.draw.drawDetections('overlay', result.map(res => res.faceDetection), { withScore: false });
//   }

//   setTimeout(() => this.onPlay(), 1000);
// };
render(){
return (
<div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <video
            ref={this.video}
            autoPlay
            muted
            onPlay={this.onPlay}
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0
            }}
          />
          <canvas id="overlay" />
</div>
);
  };
};
export default FaceApi;
