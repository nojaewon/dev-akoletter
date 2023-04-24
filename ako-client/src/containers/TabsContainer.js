import { Radio, Tabs } from 'antd';
import { useState } from 'react';

function TabsContainer({script}){  
  return (
    <div className='tool-taps'>
      <Tabs
        defaultActiveKey="1"
        size="large"
        style={{
          marginBottom: 32,
        }}
        tabPosition='left'
        items={[
          {
            label: `Script`,
            key: 0,
            children: script,
          },
          {
            label: `Element`,
            key: 1,
            children: `Content of tab2`,
          },
          {
            label: `Text`,
            key: 2,
            children: `Content of tab3`,
          },
        ]}
      />
    </div>
  );
};
export default TabsContainer;