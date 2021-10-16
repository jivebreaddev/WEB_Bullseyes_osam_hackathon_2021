import * as React from "react";
import { Card, CardHeader } from "@material-ui/core";
import ImageDetection from "./FaceApi";
import ImageDetection from "./FaceApiVideo";
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
      <ImageDetection src=""></ImageDetection>
    </Card>
  )
};

export const VideoDemoRecognition_1 = (props) => (
  <Card className={classes.main}>
      <CardHeader title="Welcome to the administration" />
      <ImageDetection src="Useforvideo.mp4"></ImageDetection>
    </Card>
  )
export const VideoDemoRecognition_2 = (props) => (
  <Card className={classes.main}>
      <CardHeader title="Welcome to the administration" />
      <ImageDetection src="srcback.mp4"></ImageDetection>
    </Card>
  )
export const VideoDemoRecognition_3 = (props) => (
  <Card className={classes.main}>
      <CardHeader title="Welcome to the administration" />
      <ImageDetection src="cropped.mp4"></ImageDetection>
    </Card>
  )


