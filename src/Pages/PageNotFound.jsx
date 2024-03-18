import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Button, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

function PageNotFound() {
  return (
    <Flex vertical align='flex-start'>
        <Button icon={<LeftOutlined/>}>
            <Link to="/">Go to Home</Link>
        </Button>
        <Typography.Title level={1}>404 NOT FOUND</Typography.Title>
    </Flex>
  )
}

export default PageNotFound