import * as React from "react";
import { Admin, Resource } from "react-admin";
import { UserList, UserEdit, UserCreate, UserShow } from "./users";
import { AccessUserEdit, AccessUserCreate, AccessUserShow } from "./AccessUser";
import AccessUser from "./AccessUser";
import UserIcon from "@material-ui/icons/Group";
import AccessUserIcon from "@material-ui/icons/ContactMail";
import { Dashboard } from './dashboard';
import authProvider from "./authProvider";
import UserStatistics from "./UserStatistics";
import faceRecognition from "./faceRecognition";
import myDataProvider from "./myDataProvider";
import MyLayout from './MyLayout';
const dataProvider1 = myDataProvider
const App = () => (

  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider1}
    layout={MyLayout}
  >

    <Resource
      name="users"
      list={UserList} create={UserCreate} edit={UserEdit} show={UserShow} icon={UserIcon}
      options={{ label: "사용자" }}
      layout={MyLayout}
    />
    <Resource
      name="accessusers"
      list={AccessUser} show={AccessUserShow} icon={AccessUserIcon}
      options={{ label: "출입한 사용자" }}
    />
    <Resource
      name="statistics"
      list={UserStatistics}
      options={{ label: "통계" }}
    />

  </Admin>
);

export default App;