import { Tabs } from 'antd';
import { useEffect, useState } from 'react';

function TabsContainer({summary, title, content}){

  return (
    <div className='tool-taps'>
      <Tabs
        defaultActiveKey="1"
        size="large"
        style={{
          marginBottom: 32,
        }}
        tabPosition={ document.body.clientWidth >= 975  ? "left" : "top"}
        items={[
          {
            label: `Script`,
            key: 0,
            children: <div>
              <h2>요약</h2> 
              <p>
                {summary}
              </p>
              <br /> 
              <h2>{title}</h2>
              <p>
              {content}
              </p>
            </div>,
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
          {
            label: `Images`,
            key: 3,
            children: `Content of tab4`,
          },
          {
            label: `Uploads`,
            key: 4,
            children: `Content of tab5`,
          },
        ]}
      />
    </div>
  );
};
export default TabsContainer;