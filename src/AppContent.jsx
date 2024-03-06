import React, { useState, useEffect } from 'react';
import { Drawer, Layout, Menu, theme, Button } from 'antd';

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
            minHeight: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            }}
        >
            Content
        </Content>
        </Layout> 
     );
}
 
export default AppContent;