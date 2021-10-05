import * as React from "react";
import { Admin, Resource } from "react-admin";
import { UserList, UserEdit, UserCreate, UserShow } from "./users";
import { NotUserList } from "./notusers";
import dataProvider from './dataProvider';
import UserIcon from "@material-ui/icons/Group";
import NotUserIcon from "@material-ui/icons/Warning";
import AccessUserIcon from "@material-ui/icons/ContactMail";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { AccessUserList } from "./AccessUser";
import UserStatistics from "./UserStatistics";
import faceRecognition from "./faceRecognition";
import drfProvider from 'ra-data-django-rest-framework';

const INITIAL = "https://osamhack2021-ai-web-bullseyes-bullseyes-q74x46j562xxgg-8000.githubpreview.dev"
const dataProvider1 = drfProvider(INITIAL);
const App = () => (

  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider1}
  >
    
    <Resource
      name="users"
      list={UserList}
      options={{ label: "사용자" }}
    />
    <Resource
      name="access"
      list={AccessUserList}
      icon={AccessUserIcon}
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