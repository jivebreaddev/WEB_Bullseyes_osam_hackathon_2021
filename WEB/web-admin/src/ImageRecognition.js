import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import ImageDetection from "./FaceApi";
import ImageDetection3 from './FaceRecognitionDemo2';
import { makeStyles } from '@material-ui/core/styles';
import "./styles.css";

const useStyles = makeStyles({
  main: {
    height: "52px",
    width: "230px",
    background: "#FFFFFF",
  },
});


export default () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <ImageDetection></ImageDetection>
  </Card>
);
export const UserStatistics = (props) => {
  const classes = useStyles();
  return (
  <Card className={classes.main}>
    <CardHeader title="Welcome to the administration" />
    <ImageDetection></ImageDetection>
  </Card>
  )
};

export const ImageRecognition_2 = (props) => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <ImageDetection3></ImageDetection3>
  </Card>
);



export const UserStatistics = () => {
  
  return(
    <Card >
      sd
    </Card>
  );
};
