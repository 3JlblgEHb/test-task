import React from 'react';
import Sidebar from '../components/sidebar/Sidebar'; 
import Main from '../components/main/Main';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar className="sidebar-main"/>  
      <Main className="main"/>
    </div>
  );
};

export default Home;
