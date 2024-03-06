import React, {createContext, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import { ConfigProvider } from 'antd'
import Test from './helper/test.jsx'
import Login from './Login/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider
  theme={{
    components: {
      Button: {
        colorPrimary: '#00b96b',
        algorithm: true, // Enable algorithm
      },
      Input: {
        colorPrimary: '#eb2f96',
        algorithm: true, // Enable algorithm
      }
    },
  }}
>
    <React.StrictMode>
      {/* <App />
      <Test /> */}
      <Login />
    </React.StrictMode>
  </ConfigProvider>
)
