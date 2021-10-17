import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import * as faceApi from "face-api.js";
import InitialPosting from './myDataProvider';
import axios from 'axios';
import "./styles.css";
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, CardMedia, CardHeader } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  video: {
    position: "absolute",
    right: "675px",
    top: "200px",
    width: "204px",
    height: "202px",
  },
  text: {
    position: "absolute",
    right: "600px",
    top: "450px",
    width: "354px",
    height: "202px",
  },
  picture: {
    position: "absolute",
    'border-radius': "30px",
    border: "1px solid",
    left: "24px",
    top: "21px",
    width: "156px",
    height: "156px",
  },
});

const ImageDetection = (prop) => {
  const classes = useStyles();
  const [identity, setIdentity] = useState("");
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
        setPic(canvas.toDataURL('image/jpeg', 1));

        setDate(new Date());
        axios({
          method: 'post',
          url: "https://osamhack2021-ai-web-bullseyes-bullseyes-7v5x5w6jwfx5xj-8000.githubpreview.dev/accessusers/",
          data: {
            photourl: canvas.toDataURL('image/jpeg', 1), time: date.toISOString()
          }
        }).then(function (response) {
          console.log(response.data);
          setIdentity(response.data);
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
      try {
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
        const box = { x: 120, y: 100, width: 200, height: 200 };

        const drawOptions = {
          label: "Put Your Face Here",
          lineWidth: 5
        };
        const drawBox = new faceApi.draw.DrawBox(box, drawOptions);
        drawBox.draw(canvasRef.current);
      }
      catch (err) {

      }
    }, 5000);
  };
  // styling to css file? or other methods
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>

          <div className="Videodiv">
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

        </Grid>
        <Card className={classes.video}>
          <CardMedia
            className={classes.picture}
            component="img"
            image={pic}
          />
        </Card>
        <Card className={classes.text}>
          {typeof(identity)=="string" ? "" :
            <div className="fonts">
              <p>
                <div className="head">{identity.data.name}</div>
                <div className="opacity">{identity.data.company}</div>
                <div className="opacity">{identity.data.rank}</div>
                <div className="opacity">{
                  identity.data.time.substr(0,10)
                  + " " +
                  identity.data.time.substr(11,8)
                }</div>
                <div className="opacity">{identity.data.place}</div>
                <div className="opacity">{identity.data.altid}</div>
              </p>
            </div>
          }
        </Card>
      </Grid>
      <div className="title1">비디오</div>
      <div className="title2">사용자 정보</div>
    </div>
  );

};
export default ImageDetection;
// const ImageDetection = () => {

//   const [date, setDate] = useState();
//   const [identity, setIdentity] = useState("");
//   const displayWidth = 450;
//   const displayHeight = 360;
//   const [pic, setPic] = useState();
//   const [initialized, setInitialized] = useState(false);
//   const canvasRef = useRef();
//   const videoRef = useRef();

//   const option = new faceApi.TinyFaceDetectorOptions({
//     inputSize: 256,
//     scoreThreshold: 0.8
//   });
//   useEffect(() => {
//     const models = async () => {
//       Promise.all([faceApi.nets.tinyFaceDetector.load("/models/")]).then(
//         setupVideo
//       );
//       setInitialized(true);
//       setDate(new Date());
//     };
//     models();
//   }, []);
//   async function extractFaces(Image, box) {
//     if (box) {
//       const extractRegions = [
//         new faceApi.Rect(box.x, box.y, box.width, box.height)
//       ];
//       let faceImages = await faceApi.extractFaces(Image, extractRegions);
//       faceImages.forEach((canvas) => {
//         setPic(canvas.toDataURL());

//         setDate(new Date());
//         axios({
//           method: 'post',
//           url: "https://osamhack2021-ai-web-bullseyes-bullseyes-7v5x5w6jwfx5xj-8000.githubpreview.dev/accessusers/",
//           data: {
//             photourl: canvas.toDataURL(), time: date.toISOString()
//           }
//         }).then(function (response) {
//           setIdentity(response.data);
//         });
//       });


//     }
//   }
//   const setupVideo = () => {
//     navigator.mediaDevices
//       .getUserMedia({
//         video: { facingMode: "user" }
//       })
//       .then((stream) => (videoRef.current.srcObject = stream));
//     // navigator.getUserMedia().then(stream => videoRef.current.srcObject = stream).catch(console.log)
//   };
//   const videoSize = {
//     width: displayWidth,
//     height: displayHeight
//   };
//   const VideoPlay = () => {
//     setInterval(async () => {
//       if (initialized) {
//         setInitialized(false);
//         canvasRef.current.innerHTML = faceApi.createCanvasFromMedia(
//           videoRef.current
//         );
//       }

//       faceApi.matchDimensions(canvasRef.current, videoSize);

//       const detections = await faceApi.detectAllFaces(videoRef.current, option);

//       if (detections[0]) {
//         extractFaces(videoRef.current, detections[0].box);
//       }
//       const resizedDectect = faceApi.resizeResults(detections, videoSize);
//       canvasRef.current
//         .getContext("2d")
//         .clearRect(0, 0, displayWidth, displayHeight);
//       faceApi.draw.drawDetections(canvasRef.current, resizedDectect);
//       const box = { x: 161, y: 180, width: 128, height: 128 };

//       const drawOptions = {
//         label: "Put Your Face Here",
//         lineWidth: 5
//       };
//       const drawBox = new faceApi.draw.DrawBox(box, drawOptions);
//       drawBox.draw(canvasRef.current);
//     }, 5000);
//   };
//   // styling to css file? or other methods
//   return (
//     <div>
//       <div className="Videodiv">
//         {/* <video ref={videoRef} autoPlay muted className="Video" onPlay={VideoPlay} src="media/example.mp4" /> */}

        
//         <canvas className="Canvas" ref={canvasRef} />
//       </div>
//       <br></br>
//       <img className="Canvas" src={pic} />
//     </div>
//   );

// };








// <video
// className="Video"
// height={displayWidth}
// width={displayWidth}
// ref={videoRef}
// autoPlay
// muted
// onPlay={VideoPlay}
// />