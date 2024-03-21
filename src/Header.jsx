import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Layout, Menu, theme, Button, App } from 'antd';
import {MenuOutlined } from '@ant-design/icons';

const headerItems = ['1'].map((key) => ({
    key,
    label: <Link to={`/login`}>Login Page</Link>,
  }));


const { Header } = Layout;


const AppHeader = ({isMobile, openDrawer}) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

    return ( 
        <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {isMobile && 
        <Button icon={<MenuOutlined/>} onClick={openDrawer}/>}

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={headerItems}
          style={{
            flex: 1,
            minWidth: 0,

          }}
        />

      </Header>
    );
}

export default AppHeader;