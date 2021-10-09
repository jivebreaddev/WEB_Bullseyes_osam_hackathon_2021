import * as faceApi from "face-api.js";
import React from "react";

class FaceApi extends React.Component{
video = React.createRef();
canvas = React.createRef();

componentDidMount() {
    this.run();
  }

  run = async () => {
    try {
      await faceApi.nets.tinyFaceDetector.load("/models/");
      await faceApi.loadFaceExpressionModel(`/models/`);
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
    setTimeout(() => this.onPlay());
    return;
  }

  const options = new faceApi.TinyFaceDetectorOptions({
    inputSize: 512,
    scoreThreshold: 0.5
  });

  const result = await faceApi
    .detectSingleFace(this.video.current, options)

  if (result) {
    faceapi.drawDetection('overlay', mtcnnResults.map(res => res.faceDetection), { withScore: false });
  }

  setTimeout(() => this.onPlay(), 1000);
};
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
          }}

export default FaceApi;
