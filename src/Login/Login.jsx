import React, {useState, useEffect, useRef} from "react";
import { Card, Button, Typography, Space, Flex, message, Modal, Input, Image, Form, Checkbox, Divider } from 'antd';
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
    ExclamationCircleFilled,
    LockOutlined, 
    EyeInvisibleOutlined, 
    EyeTwoTone,
    AppleFilled,
    GoogleCircleFilled 
} from '@ant-design/icons';
import { MobileContext } from "../App/App.jsx";
import "./LoginStyle.css"
import Link from "antd/es/typography/Link.js";
import Logo from "../AWW.png"

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

      
    return (
        <Flex align="center" justify="center" className="gradient-background" style={{height: "100vh"}}>
            <Card style={{ width: "50%", height: "40%"}} className="login-card">
                <Flex>
                    <Flex vertical style={{width: "100%"}} gap={"middle"}>
                        <Image src={Logo} preview={false} height={50} width={50}/>
                        <Typography.Title style={{ width: "100%", fontWeight: "400"}}>Sign In</Typography.Title>
                    </Flex>

                    <Flex vertical style={{ width: "100%"}}>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            >
                                
                                <Form.Item
                                    name="username"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                    ]}
                                    extra={
                                        <Link href="" style={{fontSize: "12px", fontWeight: "500"}}>
                                            Forgot password?
                                        </Link>
                                    }
                                >
                                    <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                    />
                                </Form.Item>

                                <Flex align="center" gap={"small"} style={{maxWidth: "40%"}}>
                                    <Divider/>
                                    <p style={{color: "gray"}}>or</p>
                                    <Divider/>
                                </Flex>

                                <Flex align="center" justify="center" gap={"small"}>
                                    <Button block icon={<AppleFilled/>}/>
                                    <Button block icon={<GoogleCircleFilled/>}/>
                                </Flex>

                                <Form.Item>
                                    <Flex align="center" justify="space-between">
                                        <Link href="" style={{fontWeight: "500", fontSize: "12px"}}>Create an account</Link>

                                        <Button type="primary" htmlType="submit" style={{ width: "30%"}}>
                                        Log in
                                        </Button>
                                    </Flex>
                                </Form.Item>
                        </Form>
                    </Flex>
                </Flex>
            </Card>
        </Flex>
    )
}

export default Login