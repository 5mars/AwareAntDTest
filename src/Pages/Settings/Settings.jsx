import React, { useState } from 'react'
import { Button, Typography, Flex, Avatar, Upload, Switch, Space } from 'antd';
import { UserOutlined, EditOutlined, MoonFilled, SunOutlined } from '@ant-design/icons';

function Settings() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex vertical gap={"large"}>
      <Typography.Title level={1}>Settings</Typography.Title>

      <Flex align='center' gap={"middle"}>
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: 'relative' }}
          >
          <Avatar size={64} icon={<UserOutlined />} style={{ opacity: isHovered ? 0.5 : 1 }}/>
          <Upload>
            <Button 
              type='text'
              shape='circle'
              size='large'               
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: isHovered ? 'block' : 'none'
              }}
              icon={<EditOutlined style={{color: "white"}}/>}
              />
          </Upload>
        </div>
        <Typography.Title level={3}>Username</Typography.Title>

      </Flex>
        <Flex gap={"middle"} align='center'>
          <Typography.Text strong>Dark Mode</Typography.Text>
          <Switch checkedChildren={<SunOutlined/>} unCheckedChildren={<MoonFilled/>}/>
        </Flex>
    </Flex>
  )
}

export default Settings