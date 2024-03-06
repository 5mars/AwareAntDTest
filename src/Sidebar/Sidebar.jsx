import React, {useState, useEffect, useContext} from "react";
import "./Sidebar.css"
import { Drawer, Layout, Menu, theme, Button, Typography, Divider, Flex, Collapse, Avatar } from 'antd';
import { PlusCircleOutlined, AimOutlined, UserOutlined, TeamOutlined, LineChartOutlined } from '@ant-design/icons';
import { MobileContext } from "../App/App.jsx";

import CollapseRow from "../Components/CollapseRow.jsx";
import SidebarMenu from "../Components/SidebarMenu.jsx";


// SIDEBAR CONTENT (WHETHER IT'S IN A DRAWER OR SIMPLY I SIDER IN THE APP.JSX FILE)
const { Sider } = Layout;
const { Title, Paragraph } = Typography;


const Sidebar = () => {
  const { isMobile } = useContext(MobileContext);

  const [missionsCount, setMissionsCount] = useState(1);
  const [teamCount, setTeamCount] = useState(1);

  const addMenuItem = () => {
    setChildrenCount(prevCount => prevCount + 1);
    console.log(childrenCount);
  };

  const AddButton = () => {
    return (
      <Button type="text" icon={<PlusCircleOutlined/>}       onClick={(e) => {
        e.stopPropagation();
        addMenuItem();
      }}/>
    );
  }


      const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
      const SidebarHeader = () => {
        const handleHeaderClick = () => {
          console.log("Header clicked!");
        }
        return (
          <Flex onClick={handleHeaderClick} align="center" style={{ height: "64px", padding: "1em", cursor: "pointer" }} gap={"small"}>
            <Avatar size={40} icon={<UserOutlined />} />
            <p style={{fontSize: "20px", fontWeight: "500"}}>Jeremy</p>
          </Flex>
        );
      }

    return ( 
        <Sider
            width={!isMobile ? 250 : "100%"}
            style={{
            background: colorBgContainer,
            minHeight: "100vh",
            }}
        >
          {!isMobile && <SidebarHeader/>}


          <Divider className="divider"/>
          
            <SidebarMenu/>

      </Sider>
    );
}

export default Sidebar;