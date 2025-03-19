import React from 'react';
import { Button } from 'antd'; 
import { DownOutlined } from '@ant-design/icons'; 
import './Main.css'; 
const Main = () => {
  const handleExportData = () => {
    console.log('Export Data button clicked');
  };

  const handleCreateReport = () => {
    console.log('Create Report button clicked');
  };

  const headerContent = (
    <div className="header-content">
      <div className="text-and-buttons">
        <div>
          <h1>Welcome back, John</h1>
          <p>Measure your advertising ROI and report website traffic.</p>
        </div>
        <div className="buttons-container">
          <Button
            className="export-data"
            type="primary"
            onClick={handleExportData}
            style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}
          >
            Export Data <DownOutlined style={{ marginLeft: '5px' }} />
          </Button>
          <Button
            className="create-report"
            type="default"
            onClick={handleCreateReport}
          >
            Create Report
          </Button>
        </div>
      </div>
    </div>
  );

  const statisticGroup = (
    <div className="statistic-group">
      <div style={{display:'contents'}}>
      <div className="stat-item">Group 1</div>
      <div className="stat-item">Group 2</div>
      <div className="stat-item">Group 3</div>
      <div className="stat-item">Group 4</div>
      </div>
    </div>
    
  );


  const largeStaticGroup = (

    <div className='large-static-group'>
      <div style={{display: 'table-cell',paddingTop: '20px'}}>
      <div className="large-stat-item">Group 5</div>
      </div>
    </div>
  )

  return (
    <div className="main-container">
      {headerContent}
      {statisticGroup}
      {largeStaticGroup}
    </div>
  );
};

export default Main;
