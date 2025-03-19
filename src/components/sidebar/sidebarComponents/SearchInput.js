import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../Sidebar.css';


const SearchInput = () => {
  return (
    <div  className="search-input">
      <Input 
        
        placeholder="Search... for"
        prefix={ <SearchOutlined style={{ color: '#AEB9E1' }} />}
        style={{
          height:"42px",
          width: "243px",
          fontFamily: "Mona-Sans, sans-serif",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "16px",
          letterSpacing: "0%",
          backgroundColor: "#0B1739",
          border: "0,6px",
          borderColor: "#343B4F",
          color: "#AEB9E1",
        }}
      />
      </div>
   
  );
};

export default SearchInput;
