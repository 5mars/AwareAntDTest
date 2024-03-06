import React, {useState, useEffect, useContext} from "react";
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
import { MobileContext } from "../App/App.jsx";

// LOGIC OF THE SIDEBAR 
function SidebarMenu({ closeDrawer }) {
    // ======================================== UseStates, Func & Misc. Consts ========================================
    const {isMobile, setDrawerOpen} = useContext(MobileContext);

    const [hoveredKey, setHoveredKey] = useState(null);
    
    const [edit, setEdit] = useState(false);
    const [missionName, setMissionName] = useState("Mission");
    // const [missionDescription, setMissionDescription] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [editingMissionKey, setEditingMissionKey] = useState(null);
    
    const [messageApi, contextHolder] = message.useMessage();
    const { confirm } = Modal;
    const [form] = Form.useForm();
    
    const [missions, setMissions] = useState([
        {key: "1", name: missionName},
        {key: "2", name: "Mission2 "},
    ]);
    const alert = () => {
        messageApi.open({
            type: 'success',
            content: 'Item deleted!',
        });
    };
    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this mission?',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                alert();
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const addMission = () => {
        const getNewKey = () => {
            return (Math.max(...missions.map(mission => Number(mission.key))) + 1).toString();
        };
        setMissions([...missions, { key: getNewKey(), name: "New Mission" }]);
        // const newKey = (Math.max(...missions.map(mission => Number(mission.key))) + 1).toString();
        // const newMission = { key: newKey, name: 'New Mission' };
        // setMissions([...missions, newMission]);
    };

    const editMission = (key, newName) => {
        setMissions(missions.map(mission =>
            mission.key === key ? { ...mission, name: newName } : mission
        ));
    };

    const deleteMission = (key) => {
        setMissions(missions.filter(mission => mission.key !== key));
    };

    // ======================================== MARK: Handle click events ========================================
    const handleAddClick = (e) => {
        e.stopPropagation();
        // messageApi.info('Add clicked!');
        addMission();
    }
    const handleMoreClick = (e) => {
        e.stopPropagation();
        console.log('More clicked!');
    }
    const handleEditClick = (key) => {
        setEditingMissionKey(key);
        setModalOpen(true);
    }
const handleDeleteClick = (key) => {
  // Confirm deletion with the user
  confirm({
    title: 'Are you sure you want to delete this mission?',
    icon: <ExclamationCircleFilled />,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      // Update state with the filtered missions
        setMissions(missions.filter(mission => mission.key !== key));
      // Show success message (optional)
        messageApi.success('Mission deleted successfully!');
    },
    onCancel() {
        console.log('Cancel');
    },
  });
};
    const handleOpenModal = () => {
        setModalOpen(true);
    }


    const onOk = () => {
        const values = form.getFieldsValue();
        messageApi.success('Item edited!');
    form
        .validateFields()
        .then(values => {
            editMission(editingMissionKey, values.missionName);
            console.log(editingMissionKey, values.missionName);
            setMissionName(values.missionName);
            form.resetFields();
            setModalOpen(false);
        })
        .catch(info => {
            console.log('Validate Failed:', info);
        });
    };

    const onCancel = () => {
        setModalOpen(false);
    }

     // Dropdown menu items for child elements
    const dropdownItems = {
        items: [
            {
                label: 'Edit',
                key: '1',
                icon: <EditOutlined />,
                onClick: handleEditClick
            },
            {
                label: 'Delete',
                key: '2',
                icon: <DeleteOutlined />,
                danger: true,
                onClick: showDeleteConfirm
            },
        ]
    }
// ======================================== Menu items functions and logic ========================================
const getItem = (label, key, icon, children, mission, isParent = false, isChild = false, parentKey = null) => {
        const ItemLabel = () => {
            return (
                <Flex align="center" justify="space-between">
                    {label}
                    {isParent && (isMobile || hoveredKey === key) && <Button type="text" icon={<PlusCircleOutlined/>} onClick={handleAddClick}/>}
                    {isChild && (isMobile || hoveredKey === key) &&
                        <Dropdown menu={dropdownItems} trigger={["click"]}>
                            <Button type="text" icon={<EllipsisOutlined/>} onClick={handleMoreClick}/>
                        </Dropdown>
                    }
                </Flex>
            )
        }
        return {
            key,
            label: <ItemLabel/>,
            icon,
            children,
            onClick: () => {
                setDrawerOpen(false);
            },
            onMouseEnter: () => {
                setHoveredKey(key);
                console.log(`Mouse entered item: ${key}`);
            },
            onMouseLeave: () => {
                if (hoveredKey === key) {
                    setHoveredKey(null); // Reset only if current key matches hovered key
                }
                console.log(`Mouse left item: ${key}`);
            },
            dropdown: mission && { //Create the mini dropdown menu for each mission
                items: [
                    {
                    label: 'Edit',
                    key: '1',
                    icon: <EditOutlined />,
                    onClick: handleEditClick.bind(null, mission.key) // Bind mission key
                  },
                  {
                    label: 'Delete',
                    key: '2',
                    icon: <DeleteOutlined />,
                    danger: true,
                    onClick: () => handleDeleteClick(mission.key), // Pass mission key directly
                  },
                ],
              },
        }
    }

    const items = [
        getItem('Missions', '1', <AimOutlined />, 
        missions.map((mission) => getItem(mission.name, `1-${mission.key}`, <AimOutlined />, null, mission, true)), 
        true
    ),
        getItem('Team', '2', <TeamOutlined />, [
            getItem('Member 1', '2-1', <UserOutlined />, null, false, true, "2"),
            getItem('Member 2', '2-2', <UserOutlined />, null, false, true, "2"),
        ], true),
        getItem("Insights", "3", <LineChartOutlined />),
        getItem("Settings", "4", <SettingOutlined />)
    ]

    const EditModal = () => {
        return (
            <Modal
                title="Edit Mission"
                open={modalOpen}
                onOk={onOk}
                onCancel={onCancel}
                okText="Save"
                cancelText="Cancel"
            >
                <Form form={form} id="editForm">
                    <Form.Item label="Mission Name" name="missionName" initialValue={missionName}>
                        <Input placeholder="Enter new mission name..." />
                    </Form.Item>
                    <Form.Item label="Mission Description" name="missionDescription">
                        <Input placeholder="Enter mission description"/>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }

    return (
        <>
            {contextHolder}
            <Menu mode="inline" items={items}/>
            <EditModal/>
            <div>
                Hovered key: {hoveredKey}
            </div>
        </>
    )
}

export default SidebarMenu