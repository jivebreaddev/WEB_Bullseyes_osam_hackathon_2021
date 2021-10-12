import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import ImageDetection from "./FaceApiVideo";
export default () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <ImageDetection></ImageDetection>
  </Card>
);