
import React, { useState, useEffect, useRef } from "react";
import * as faceApi from "face-api.js";
import axios from 'axios';

import "./styles.css";

const ImageDetection = () => {

  const [date, setDate] = useState();

  const displayWidth = 450;
  const displayHeight = 360;
  const [pic, setPic] = useState();
  const [initialized, setInitialized] = useState(false);
  const canvasRef = useRef();
  const videoRef = useRef();

  const option = new faceApi.TinyFaceDetectorOptions({
    inputSize: 256,
    scoreThreshold: 0.8
  });
  useEffect(() => {
    const models = async () => {
      Promise.all([faceApi.nets.tinyFaceDetector.load("/models/")]).then(
        setupVideo
      );
      setInitialized(true);
      setDate(new Date());
    };
    models();
  }, []);
  async function extractFaces(Image, box) {
    if (box) {
      const extractRegions = [
        new faceApi.Rect(box.x, box.y, box.width, box.height)
      ];
      let faceImages = await faceApi.extractFaces(Image, extractRegions);
      faceImages.forEach((canvas) => {
        setPic(canvas.toDataURL());

        setDate(new Date());
        axios({
          method: 'post',
          url: 'https://osamhack2021-ai-web-bullseyes-bullseyes-pjw6w945935xx-8000.githubpreview.dev/accessusers/',
          data: {
            photourl: canvas.toDataURL(), time: date.toISOString()
          }
        });
      });


    }
  }
  const setupVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: "user" }
      })
      .then((stream) => (videoRef.current.srcObject = stream));
    // navigator.getUserMedia().then(stream => videoRef.current.srcObject = stream).catch(console.log)
  };
  const videoSize = {
    width: displayWidth,
    height: displayHeight
  };
  const VideoPlay = () => {
    setInterval(async () => {
      if (initialized) {
        setInitialized(false);
        canvasRef.current.innerHTML = faceApi.createCanvasFromMedia(
          videoRef.current
        );
      }

      faceApi.matchDimensions(canvasRef.current, videoSize);

      const detections = await faceApi.detectAllFaces(videoRef.current, option);

      if (detections[0]) {
        extractFaces(videoRef.current, detections[0].box);
      }
      const resizedDectect = faceApi.resizeResults(detections, videoSize);
      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, displayWidth, displayHeight);
      faceApi.draw.drawDetections(canvasRef.current, resizedDectect);
      const box = { x: 161, y: 180, width: 128, height: 128 };

      const drawOptions = {
        label: "Put Your Face Here",
        lineWidth: 5
      };
      const drawBox = new faceApi.draw.DrawBox(box, drawOptions);
      drawBox.draw(canvasRef.current);
    }, 5000);
  };
  // styling to css file? or other methods
  return (
    <div>
      <div className="Videodiv">
        {/* <video ref={videoRef} autoPlay muted className="Video" onPlay={VideoPlay} src="media/example.mp4" /> */}

        <video
          className="Video"
          height={displayWidth}
          width={displayWidth}
          ref={videoRef}
          autoPlay
          muted
          onPlay={VideoPlay}
        />
        <canvas className="Canvas" ref={canvasRef} />
      </div>
      <br></br>
      <img className="Canvas" src={pic} />
    </div>
  );

};

export default ImageDetection;