import * as React from "react";
import { Admin,Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from "./users";
import { NotUserList } from "./notusers";
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
    <Resource name="posts" list={NotUserList} />
  </Admin>
);


export default App;