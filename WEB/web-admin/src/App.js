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


const dataProvider1 = drfProvider("https://osamhack2021-ai-web-bullseyes-bullseyes-q74x46j562xxgg-8000.githubpreview.dev");
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
// import './App.css';
// import axios from 'axios';
// function test() {
//   console.log("fetch start")
//   // fetch('https://osamhack2021-ai-web-bullseyes-bullseyes-q74x46j562xxgg-8000.githubpreview.dev/users/', {credentials: 'include', mode: 'no-cors'}).then(response => response.json())
//   // .then(data => console.log(data));
//   const response = axios.get(
//     'https://osamhack2021-ai-web-bullseyes-bullseyes-q74x46j562xxgg-8000.githubpreview.dev/users/'
//   );
//   console.log(response)
// }

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
      
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <button onClick={()=>test()}>Test</button>
//       </header>
//     </div>
//   );
// }

// export default App;