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
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="posts" list={NotUserList} icon={NotUserIcon} />
    <Resource name="comments" list={AccessUserList} icon={AccessUserIcon} />
  </Admin>
);


export default App;