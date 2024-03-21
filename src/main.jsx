import React, { createContext, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  useParams
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

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='settings' element={<Settings/>}/>
    <Route path='insights' element={<Insights/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='*' element={<PageNotFound/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='/missions/:missionId' element={<MissionPage/>}/>
  </Route>
))

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
      {/* <App /> */}
      {/* <Test /> */}
      {/* <Login /> */}
    </React.StrictMode>
  </ConfigProvider>
)
