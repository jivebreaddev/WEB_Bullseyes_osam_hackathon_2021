import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import ImageDetection from "./FaceApi";
import ImageDetection3 from './FaceRecognitionDemo2';
export default () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <ImageDetection3></ImageDetection3>
  </Card>
);
export const UserStatistics = (props) => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <ImageDetection></ImageDetection>
  </Card>
);

export const ImageRecognition_2 = (props) => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <ImageDetection3></ImageDetection3>
  </Card>
);