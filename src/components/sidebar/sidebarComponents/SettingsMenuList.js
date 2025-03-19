import React from 'react';
import { Menu } from 'antd';
import { SettingOutlined, FileTextOutlined } from '@ant-design/icons';
import "../Sidebar.css";
import avatar from '../../../assets/images/avatar.png';

const SettingsMenuList = () => {
  const items = [
    {
      key: 'settings',
      icon: <SettingOutlined style={{ color: '#AEB9E1' }} />,
      label: 'Settings',
    },
    {
      key: 'templatePages',
      icon: <FileTextOutlined style={{ width: '20px', height: '20px' }} />,
      label: 'Template Pages',
    },
    {
      key: 'accountSetting',
      icon: (
        <div
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#CB3CFF',
            borderRadius: '50%',
            overflow: 'hidden',  
          }}
        >
          <img
            src={avatar}
            alt="Jhon Carter"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',  
            }}
          />
        </div>
      ),
      label: (
        <div>
          <div style={{ height: '16px' }}>Jhon Carter</div>
          <div style={{ fontSize: '12px', color: '#AEB9E1' }}>Account Settings</div>
        </div>
      ),
    },
  ];

  return (
    <div className="settings-menu-list" style={{ backgroundColor: '#081028', color: '#AEB9E1', padding: '20px' }}>
      <Menu
        mode="inline"
        theme="dark"
        style={{
          width: 244,
          backgroundColor: '#081028',
        }}
        items={items}
      />
    </div>
  );
};

export default SettingsMenuList;
