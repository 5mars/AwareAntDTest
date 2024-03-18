import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { Drawer, Layout, Menu, theme, Button, Typography, ConfigProvider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './index.css';
import Sidebar from '../Sidebar/Sidebar';
import AppHeader from '../Header';
import AppContent from '../AppContent';

import Home from '../Pages/Home';
import Settings from '../Pages/Settings/Settings';

export const MobileContext = createContext();

const App = () => {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const {Title} = Typography;

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const DrawerHeader = () => {
    return (
      <Button type='text'>
        <Title level={4}> 
        <UserOutlined />
          Username 
        </Title>
      </Button>
    );
  }

  return (
    <ConfigProvider>
      <MobileContext.Provider value={ {isMobile, drawerOpen, setDrawerOpen} }>
        <Layout style={{ minHeight: "calc(100vh - 64px)" }}>
              {isMobile ? 
              <Drawer 
                open={drawerOpen} 
                onClose={ closeDrawer } 
                placement='left' 
                width={"75%"} 
                title={<DrawerHeader/>} 
                styles={{ 
                  body: { 
                    padding: 0, 
                    }
                  }}>
                <Sidebar style={{ overflow: 'auto', height: '100vh', position: 'fixed' }} closeDrawer={setDrawerOpen} />
              </Drawer> : 
                <Sidebar/>
              }

          <Layout style={{ minHeight: "calc(100vh - 64px)" }}>
              <AppHeader isMobile={isMobile} openDrawer={openDrawer}/>

              <AppContent/>

          </Layout>
        </Layout>
      </MobileContext.Provider>
    </ConfigProvider>
  );
};
export default App;