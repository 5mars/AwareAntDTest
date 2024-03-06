import React, { useState } from 'react';
import { Menu, Button, Typography, Dropdown, Flex, message, Modal, Input, Tooltip, Form } from 'antd';
import { 
    PlusCircleOutlined, 
    AimOutlined, 
    UserOutlined, 
    TeamOutlined, 
    SettingOutlined, 
    LineChartOutlined, 
    EllipsisOutlined, 
    EditOutlined, 
    DeleteOutlined, 
    ExclamationCircleFilled 
} from '@ant-design/icons';

const Test = () => {
  const [hoveredKey, setHoveredKey] = useState(null); // Track hovered item key

  const handleHover = (key) => setHoveredKey(key);

  const menuItems = [
    { label: 'Edit', key: '1', icon: <EditOutlined /> },
    { label: 'Delete', key: '2', icon: <DeleteOutlined />, danger: true },
  ];
  
  const getItem = (label, key, icon, children, type, isParent = false) => {
    const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
  
    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);
  
    const ItemLabel = () => (
      <Flex align="center" justify="space-between">
        {label}
        {isParent && (
          <Button type="text" icon={<PlusCircleOutlined />} onClick={() => handleAddClick(type)} />
        )}
        {children?.length > 0 && isOpen && ( // Show dropdown only if children and hovered
          <Dropdown overlay={<Menu items={menuItems} />}>
            <Button type="text" icon={<EllipsisOutlined />} />
          </Dropdown>
        )}
      </Flex>
    );
  
    return {
      key,
      label: <ItemLabel onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />,
      icon,
      children,
      onClick: () => setDrawerOpen(false), // Assuming this sets drawer state
    };
  };
  
  const handleAddClick = (type) => {
    // Implement logic to add new child item based on type (mission or team)
    console.log(`Adding new child of type: ${type}`);
  };
  
  const missions = [
    // Your mission data here
    {
      name: 'Mission 1',
    }
  ];
  
  const teams = [
    // Your team data here
  ];
  
  const items = [
    getItem('Missions', '1', <AimOutlined />, missions.map((mission) => getItem(mission.name, `1-${mission.key}`, <AimOutlined />, null)), 'mission', true),
    getItem('Team', '2', <TeamOutlined />, teams.map((team) => getItem(team.name, `2-${team.key}`, <UserOutlined />, null)), 'team', true),
    getItem("Insights", "3", <LineChartOutlined />),
    getItem("Settings", "4", <SettingOutlined />),
  ];

  return (
    <div>
      {items.map((item) => (
        <div key={item.key} onMouseEnter={() => handleHover(item.key)} onMouseLeave={() => handleHover(null)}>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Test;