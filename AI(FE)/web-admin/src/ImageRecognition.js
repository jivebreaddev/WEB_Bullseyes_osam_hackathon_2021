import * as React from "react";
import { Card, CardHeader } from "@material-ui/core";
import ImageDetection from "./FaceApi";
import VideoDetection from "./FaceApiVideo";
import { makeStyles } from '@material-ui/core/styles';
import "./styles.css";

const useStyles = makeStyles({
  main: {
    width: "1650px",
    height: "91vh",
    background: "#FFFFFF",
  },
});


export const StreamingRecognition = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.main}>
      <CardHeader title="Welcome to the administration" />
      <ImageDetection />
    </Card>
  )
};

export const VideoDemoRecognition_1 = (props) => {
  const classes = useStyles();
  return(
    <Card className={classes.main}>
      <VideoDetection src="Useforvideo.mp4" />
    </Card>
    );
  }
export const VideoDemoRecognition_2 = (props) => {
  const classes = useStyles();
  return(
    <Card className={classes.main}>
      <VideoDetection src="srcback.mp4" />
    </Card>
    );
  }
export const VideoDemoRecognition_3 = (props) => {
  const classes = useStyles();
  return(
    <Card className={classes.main}>
      <VideoDetection src="cropped.mp4" />
    </Card>
    );
}


