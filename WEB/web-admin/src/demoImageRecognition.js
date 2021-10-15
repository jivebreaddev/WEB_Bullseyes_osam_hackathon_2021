import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import ImageDetection2 from "./faceRecognitionDemo";
export default () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <ImageDetection></ImageDetection>
  </Card>
);
export const ImageRecognition = (props) => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <ImageDetection2></ImageDetection2>
  </Card>
);