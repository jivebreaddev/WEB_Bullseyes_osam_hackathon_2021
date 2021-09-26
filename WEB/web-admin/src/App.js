import * as React from "react";
import { Admin,Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from "./users";
import { NotUserList } from "./notusers";
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import NotUserIcon from '@material-ui/icons/Warning';
import AccessUserIcon from '@material-ui/icons/ContactMail';
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { AccessUserList } from "./AccessUser";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} options={{ label: '사용자' }} />
    <Resource name="posts" list={NotUserList} icon={NotUserIcon} options={{ label: '미등록 사용자' }} />
    <Resource name="comments" list={AccessUserList} icon={AccessUserIcon} options={{ label: '현재 출입한 사용자' }} />
  </Admin>
);


export default App;