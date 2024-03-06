import React, { useState, useEffect, useContext } from 'react'
import { Button, Typography, Collapse, Flex, Tooltip, Space, Dropdown, Menu, Card } from 'antd';
import { PlusCircleOutlined, AimOutlined, UserOutlined, TeamOutlined, RightOutlined, DeleteOutlined, EllipsisOutlined, EditOutlined } from '@ant-design/icons';
import { MobileContext } from "../App/App.jsx";
import "./component.css";

const { Text, Paragraph } = Typography;
const { Panel } = Collapse;

const CollapseRow = () => {
    const [missionsCount, setMissionsCount] = useState(1);
    const isMobile = useContext(MobileContext);
    const customPanelStyle = {
        background: 'white',
        borderRadius: 4,
        marginBottom: 0,
        border: 0,
        overflow: 'hidden',
    };

    const extraPlusBtn = () => (
        <Tooltip title="Add Mission">
            <Button type='text' icon={<PlusCircleOutlined />} size='small' onClick={
                (e) => {
                    e.stopPropagation();
                }
            }/>
        </Tooltip>
    )

    const missionPanelHeader = () => (
            <Flex gap="small">
                <AimOutlined />
                <Text strong>Missions</Text>
            </Flex>
    )

    const teamPanelHeader = () => (
            <Flex gap="small" >
                <TeamOutlined />
                <Text strong>Team</Text>
            </Flex>
    )


    const PanelItems = ({missionName}) => {
        const [isHovered, setIsHovered] = useState(false);

        const handleMenuClick = (e) => {
            console.log('Menu Item Clicked! ✅');
            e.domEvent.stopPropagation();
        };

        const handleCardClick = () => {
            console.log('Card Clicked! ✅');
        };

        const items = [
            {
                label: 'Edit',
                key: '1',
                icon: <EditOutlined />,
            },
            {
                label: 'Delete',
                key: '2',
                icon: <DeleteOutlined />,
                danger: true,
            },
        ];

        const menuProps = {
            items,
            onClick: handleMenuClick,
        };

        const [noEnterIconStr, setNoEnterIconStr] = useState(
            'Editable text with no enter icon in edit field.',
        );

        return (
            <Flex justify='space-between' align='center' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: '100%' }}
            >
                <Card 
                    className="hoverable-card"
                    bordered={false}
                    size='small'
                    style={{ width: '100%', cursor: 'pointer'}} 
                    onClick={ handleCardClick }
                >
                    <Flex align='center' justify='space-between'>
                        <Flex gap={"small"}>
                            <AimOutlined />
                            <Typography.Paragraph>
                                {missionName}
                            </Typography.Paragraph>
                        </Flex>
        
                        <Dropdown trigger={["click"]} menu={ menuProps }>
                            <Button 
                                size='small' 
                                type='text' 
                                icon={<EllipsisOutlined />}
                                style={{ visibility: (isHovered || isMobile) ? 'visible' : 'hidden', transition: 'visibility 0s' }}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </Dropdown>
                    </Flex>
                </Card>
            </Flex>
        )
    }

    return (
        <Collapse style={{ background: "white"}} bordered={false} expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : 0}/>}>
            <Panel header={missionPanelHeader()} key="1" style={ customPanelStyle } extra={extraPlusBtn()}>
                <Flex vertical gap={"small"}>
                    <PanelItems missionName="First Mission"/>
                    <PanelItems missionName="Second Mission"/>
                    <PanelItems missionName="Third Mission"/>
                    <PanelItems missionName="Fourth Mission"/>
                    <PanelItems missionName="Fifth Mission"/>
                </Flex>
            </Panel>

            <Panel header={ teamPanelHeader() } key="2" style={ customPanelStyle } extra={extraPlusBtn()}>
                <p>this is a text</p>
                <p>this is a text</p>
                <p>this is a text</p>
                <p>this is a text</p>
                <p>this is a text</p>
            </Panel>
        </Collapse>
    )
}

export default CollapseRow