import * as React from "react";
import { Card, CardHeader } from "@material-ui/core";
import ImageDetection from "./FaceApi";
import VideoDetection from "./FaceApiVideo";
import { makeStyles } from '@material-ui/core/styles';
import "./styles.css";

const useStyles = makeStyles({
  main: {
    height: "52px",
    width: "230px",
    background: "#FFFFFF",
  },
});


export const StreamingRecognition = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.main}>
      <CardHeader title="Welcome to the administration" />
      <ImageDetection></ImageDetection>
    </Card>
  )
};

export const VideoDemoRecognition_1 = (props) => {
  const classes = useStyles();
  return(
  <Card className={classes.main}>
      <CardHeader title="Welcome to the administration" />
      <VideoDetection src="Useforvideo.mp4"></VideoDetection>
    </Card>
    );
  }
export const VideoDemoRecognition_2 = (props) => {
  const classes = useStyles();
  return(
  <Card className={classes.main}>
      <CardHeader title="Welcome to the administration" />
      <VideoDetection src="srcback.mp4"></VideoDetection>
    </Card>
    );
  }
export const VideoDemoRecognition_3 = (props) => {
  const classes = useStyles();
  return(
 <Card className={classes.main}>
      <CardHeader title="Welcome to the administration" />
      <VideoDetection src="cropped.mp4"></VideoDetection>
    </Card>
    );
}


