import React, { useState } from 'react'; // Импортируем React
import { Layout } from 'antd';
import Logo from './sidebarComponents/Logo'; 
import SearchInput from './sidebarComponents/SearchInput';
import './Sidebar.css'; 
import MenuList from './sidebarComponents/MenuList';
import SettingsMenuList from './sidebarComponents/SettingsMenuList'

const { Sider } = Layout;

const Sidebar = () => {
  const [menuHeight, setMenuHeight] = useState(218);  

  return (
    <Sider width={300} style={{ height: '100vh', position: 'fixed', left: 0, top: 0 }}>
      <div className='sidebar' style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Logo />
        <SearchInput />
        <div style={{ flexGrow: 1 }}>
          <MenuList setMenuHeight={setMenuHeight} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <SettingsMenuList /> 
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
