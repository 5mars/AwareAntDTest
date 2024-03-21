import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import { Drawer, Layout, Menu, theme, Button, Flex } from 'antd';
import InputBar from "./Content/InputBar";
import { MobileContext } from "./App/App";
import ChatBox from './Content/ChatBox';

import Mission from './Pages/Mission';
import Home from './Pages/Home';
import Insights from './Pages/Insights';
import Settings from './Pages/Settings/Settings';

const { Content } = Layout;

const AppContent = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ padding: '24px' }}>
            <Content
            style={{
            padding: 24,
            margin: 0,
            // height: "100%", //useful ?
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            }}
        >
            <Outlet/>

        </Content>
        </Layout> 
    );
}

export default AppContent;