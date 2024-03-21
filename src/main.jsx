import React, { createContext, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  useParams,
  Routes
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import { ConfigProvider } from 'antd'
import Test from './helper/test.jsx'
import Login from './Login/Login.jsx'
import Home from './Pages/Home.jsx'
import PageNotFound from './Pages/PageNotFound.jsx';
import Settings from './Pages/Settings/Settings.jsx';
import Insights from './Pages/Insights.jsx';
import MissionPage from './Pages/MissionPage.jsx';


const router = createBrowserRouter([
{
  path: '/',
  element: <App/>,
  children: [
    { path: 'settings', element: <Settings/> },
    { path: 'insights', element: <Insights/> },
    { path: 'home', element: <Home/> },
    { path: 'missions/:missionId', element: <MissionPage/> },
    { path: '*', element: <PageNotFound/> }
  ]
}, {
  path: 'login',
  element: <Login/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider
  theme={{
    components: {
      Button: {
        // colorPrimary: '#00b96b',
        algorithm: true, // Enable algorithm
      },
      Input: {
        // colorPrimary: '#eb2f96',
        algorithm: true, // Enable algorithm
      },
      Layout: {
        // bodyBg: '#343434',
        // siderBg: '#343434',
      },
    },
  }}
>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </ConfigProvider>
)
