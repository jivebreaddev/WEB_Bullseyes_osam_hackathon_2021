import * as React from "react";
import { Admin,Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate, UserShow } from "./users";
import { NotUserList } from "./notusers";
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import NotUserIcon from '@material-ui/icons/Warning';
import AccessUserIcon from '@material-ui/icons/ContactMail';
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { AccessUserList } from "./AccessUser";
import UserStatistics from "./UserStatistics";
import faceRecognition from "./faceRecognition";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} icon={UserIcon} options={{ label: '사용자' }} />
    <Resource name="comments" list={AccessUserList} icon={AccessUserIcon} options={{ label: '현재 출입 사용자' }} />
    <Resource name="posts" list={NotUserList} icon={NotUserIcon} options={{ label: '미등록 사용자' }} />
    <Resource name="statistics" list={UserStatistics} options={{ label: '통계' }} />
    <Resource name="face" list={faceRecognition} options={{ label: '얼굴인식' }} />
  </Admin>
);


export default App;