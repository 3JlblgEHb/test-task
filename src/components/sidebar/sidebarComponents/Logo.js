import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'; 
import logo from '../../../assets/images/logo.png'; 

const Logo = () => {
  return (
    <div className="sidebar-logo">
      <img src={logo} alt="Logo" className="logo-image" />
      <span className="sidebar-text">Dashboard X</span>
      <div className="arrow-group">
        <ArrowLeftOutlined style={{ color: '#AEB9E1' }} />
        <ArrowRightOutlined style={{ color: '#AEB9E1' }} />
      </div>
    </div>
  );
};

export default Logo;
