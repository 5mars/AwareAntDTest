import React, { useState, useEffect } from 'react'
import { Input, Button, Flex, Dropdown } from 'antd';
import { PlusCircleOutlined, SendOutlined, PaperClipOutlined, AudioOutlined } from '@ant-design/icons';

const InputBar = () => {
    const { TextArea } = Input;

    const menuItems = {
        items: [
            {
                key: "1",
                label: "Add Attachment",
                icon: <PaperClipOutlined size={"large"} rotate={"135"}/>
            },
            {
                key: "2",
                label: "Use Microphone",
                icon: <AudioOutlined size={"large"}/>
            }
        ]
    }

    return (
        <Flex align='center' justify='center' gap={"small"}>
            <Dropdown menu={menuItems} trigger={["click"]}>
                <Button size='large' type='text' icon={<PlusCircleOutlined/>}/>
            </Dropdown>
            <Input size='large' placeholder='Type here...'/>
            <Button size='large' type='text' icon={<SendOutlined />} />
        </Flex>
    )
}

export default InputBar