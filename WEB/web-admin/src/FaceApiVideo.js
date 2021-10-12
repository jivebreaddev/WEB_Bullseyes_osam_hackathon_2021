// import * as faceApi from "face-api.js";
// import React, { useState, useEffect } from 'react';

// class FaceApi extends React.Component {
  

// }
// export default FaceApi;
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import * as faceApi from "face-api.js";
import { useMutation } from "react-admin";
import { startOfYesterday } from "date-fns";
import axios from 'axios';
import "./styles.css";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
const ImageDetection = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
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
        try{
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
        const box = { x: 120, y: 100, width: 200, height: 200};
        
        const drawOptions = {
          label: "Put Your Face Here",
          lineWidth: 5
        };
        const drawBox = new faceApi.draw.DrawBox(box, drawOptions);
        drawBox.draw(canvasRef.current);
      }
      catch (err){

      }
      }, 5000);
    };
    // styling to css file? or other methods
    return (
      <div>
        <h1>Hello</h1>
        <Grid container spacing={2}>
        <Grid item xs={8}>
        
        <div className="Videodiv">
        <video ref={videoRef} autoPlay muted className="Video" onPlay={VideoPlay} loop src="/Useforvideo.mp4" />
        <canvas className="Canvas" ref={canvasRef} />
        </div>
        
        </Grid>
        <Grid item xs={4}>
        <img className="Canvas" src={pic} />
        </Grid>
        </Grid>
        
        <br></br>
        
      </div>
    );

};

export default ImageDetection;