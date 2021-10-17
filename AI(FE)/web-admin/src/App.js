import * as React from "react";
import { Admin, Resource } from "react-admin";
import { UserList, UserEdit, UserCreate, UserShow } from "./users";
import { AccessUserCreate, AccessUserShow } from "./AccessUser";
import AccessUser from "./AccessUser";
import UserIcon from "@material-ui/icons/Group";
import AccessUserIcon from "@material-ui/icons/ContactMail";
import VideocamIcon from '@material-ui/icons/Videocam';
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import myDataProvider from "./myDataProvider";
import MyLayout from "./MyLayout";
import { theme } from "./theme";
import {StreamingRecognition, VideoDemoRecognition_1,
   VideoDemoRecognition_2, VideoDemoRecognition_3} from "./ImageRecognition";
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
        name="StreamingRecognition"
        list={StreamingRecognition}
        icon={VideocamIcon}
        options={{ label: "실시간신원확인" }}
      />

      <Resource
        name="ImageRecogition"
        list={VideoDemoRecognition_1}
        options={{ label: "데모(박시창)" }}
      />
      <Resource
        name="ImageRecogitionDemo"
        list={VideoDemoRecognition_2}
        options={{ label: "데모(이길동)" }}
      />
      <Resource
        name="ImageRecogitionDemo3"
        list={VideoDemoRecognition_3}
        options={{ label: "데모(신원불명)" }}
      />
    </Admin>
  );
};

export default App;