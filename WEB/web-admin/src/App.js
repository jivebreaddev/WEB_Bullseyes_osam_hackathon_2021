import * as React from "react";
import { Admin, Resource } from "react-admin";
import { UserList, UserEdit, UserCreate, UserShow } from "./users";
import { NotUserList } from "./notusers";
import jsonServerProvider from "ra-data-json-server";
import UserIcon from "@material-ui/icons/Group";
import NotUserIcon from "@material-ui/icons/Warning";
import AccessUserIcon from "@material-ui/icons/ContactMail";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { AccessUserList } from "./AccessUser";
import UserStatistics from "./UserStatistics";
import faceRecognition from "./faceRecognition";
import drfProvider from 'ra-data-django-rest-framework';


const dataProvider = drfProvider("https://osamhack2021-ai-web-bullseyes-bullseyes-q74x46j562xxgg-8000.githubpreview.dev");


//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      show={UserShow}
      icon={UserIcon}
      options={{ label: "사용자" }}
    />
    <Resource
      name="comments"
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
