import * as React from "react";
import { Admin, Resource } from "react-admin";
import { UserList, UserEdit, UserCreate, UserShow } from "./users";
import { AccessUserEdit, AccessUserCreate, AccessUserShow } from "./AccessUser";
import AccessUser from "./AccessUser";
import UserIcon from "@material-ui/icons/Group";
import AccessUserIcon from "@material-ui/icons/ContactMail";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { UserStatistics } from "./ImageRecognition";
import { VideoRecognition } from "./VideoRecognition";
import myDataProvider from "./myDataProvider";
import ImageRecognition from "./faceRecognitionDemo";
import ImageRecognition_2 from "./ImageRecognition_2";
import MyLayout from "./MyLayout";
import { theme } from "./theme";
import './App.css';

const dataProvider1 = myDataProvider
const App = () => {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider1}
      layout={MyLayout}
      theme={theme}
    >
      <Resource name="Dashboard" list={Dashboard} />

      <Resource
        name="users"
        list={UserList} create={UserCreate} edit={UserEdit} show={UserShow} icon={UserIcon}
        options={{ label: "사용자" }}
      />
      <Resource
        name="accessusers"
        list={AccessUser} create={AccessUserCreate} show={AccessUserShow} icon={AccessUserIcon}
        options={{ label: "출입한 사용자" }}
      />
      <Resource
        name="VideoRecognition"
        list={VideoRecognition}
        options={{ label: "스트리밍" }}
      />

      <Resource
        name="ImageRecogition"
        list={UserStatistics}
        options={{ label: "비디오스트리밍" }}
      />
      <Resource
        name="ImageRecogitionDemo"
        list={ImageRecognition}
        options={{ label: "스트리밍데모-2" }}
      />
      <Resource
        name="ImageRecogitionDemo3"
        list={ImageRecognition_2}
        options={{ label: "스트리밍데모-3" }}
      />
    </Admin>
  );
};

export default App;