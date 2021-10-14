import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import ImageDetection from "./FaceApi";
import { makeStyles } from '@material-ui/core/styles';
import "./styles.css";

const useStyles = makeStyles({
  main: {
    height: "52px",
    width: "230px",
    background: "#FFFFFF",
  },
});

export const UserStatistics = () => {
  const classes = useStyles();
  return(
    <Card className={classes.main}>
      sd
    </Card>
  );
};