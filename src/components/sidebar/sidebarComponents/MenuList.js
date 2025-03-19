import React, { useState } from 'react'; 
import { Menu } from 'antd';
import { HomeFilled, StarFilled, UserOutlined, DollarOutlined, ImportOutlined, RightOutlined } from '@ant-design/icons';
import "../Sidebar.css";

const MenuList = ({ setMenuHeight }) => {
  const [openKeys, setOpenKeys] = useState([]);
  const [menuHeight, setLocalMenuHeight] = useState(218);  

  const handleOpenChange = (keys) => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    const newHeight = 218 + keys.length * 50;  
    setLocalMenuHeight(newHeight);
    setMenuHeight(newHeight); 
  };

  const items = [
    {
      key: 'dashboard',
      icon: <HomeFilled />,
      label: 'Dashboard',
      children: [
        { key: 'pages', label: 'All pages' },
        { key: 'reports', label: 'Reports' },
        { key: 'products', label: 'Products' },
        { key: 'task', label: 'Task' },
      ],
    },
    {
      key: 'features',
      icon: <StarFilled />,
      label: 'Features',
      children: [
        { key: 'features1', label: 'Features1' },
        { key: 'features2', label: 'Features2' },
        { key: 'features3', label: 'Features3' },
      ],
    },
    {
      key: 'users',
      icon: <UserOutlined />,
      label: 'Users',
      children: [
        { key: 'userList', label: 'User List' },
        { key: 'roles', label: 'Roles' },
        { key: 'permissions', label: 'Permissions' },
      ],
    },
    {
      key: 'pricing',
      icon: <DollarOutlined />,
      label: 'Pricing',
      children: [
        { key: 'pricing1', label: 'Pricing 1' },
        { key: 'pricing2', label: 'Pricing 2' },
        { key: 'pricing3', label: 'Pricing 3' },
      ],
    },
    {
      key: 'integrations',
      icon: <ImportOutlined />,
      label: 'Integrations',
      children: [
        { key: 'integrations1', label: 'Integrations 1' },
        { key: 'integrations2', label: 'Integrations 2' },
        { key: 'integrations3', label: 'Integrations 3' },
      ],
    },
  ];

  return (
    <div className="menu-list-container" style={{ position: 'relative', top: 28, left: 28 }}>
      <Menu
        mode="inline"
        theme="dark"
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        defaultSelectedKeys={['1']}
        style={{ width: 244, height: menuHeight, backgroundColor: '#081028' }}
        expandIcon={null} 
        items={items.map((item) => ({
          key: item.key,
          icon: React.cloneElement(item.icon, {
            style: { color: openKeys.includes(item.key) ? '#CB3CFF' : '#AEB9E1' },
          }),
          label: (
            <span
              style={{
                color: openKeys.includes(item.key) ? '#CB3CFF' : '#AEB9E1',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between', 
              }}
            >
              {item.label}
              {item.children && ( 
                <RightOutlined
                  style={{
                    fontSize: '14px',
                    color: openKeys.includes(item.key) ? '#CB3CFF' : '#AEB9E1',
                    transform: openKeys.includes(item.key) ? 'rotate(90deg)' : 'rotate(0deg)',
                  }}
                />
              )}
            </span>
          ),
          children: item.children?.map((child) => ({
            key: child.key,
            label: child.label,
          })),
        }))}
      />
    </div>
  );
};

export default MenuList;
