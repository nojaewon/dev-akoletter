import { Tabs } from 'antd';
import { useEffect, useState } from 'react';

function TabsContainer({summary, title, content}){
  const [tabKey, setTabKey] = useState(1);
  const [hideToolTip, setHideToolTip] = useState(true);
  const [thisStyle, setThisStyle] = useState({left: '-37vw', width: '35vw'});

  return (
    <div className='tool-taps' style={thisStyle}>
      <Tabs
        activeKey={tabKey}
        size="large"
        style={{marginBottom: 32, backgroundColor: '#fff'}}
        tabPosition={ document.body.clientWidth >= 975  ? "left" : "top"}
        onTabClick={(key)=>{
          if(key !== 0) {
            setTabKey(key);
            return;
          };
          
          if(!hideToolTip){
            setThisStyle({left: '-37vw', width: '35vw'})
            setHideToolTip(true);
          } else if(hideToolTip){
            setThisStyle({left: '-65px', width: '120px'})
            setHideToolTip(false);
          }
          setTabKey(1);
        }}
        items={[
          {
            label: <span className="material-symbols-outlined">swap_horiz</span>,
            key: 0,
            children: ``,
          },
          {
            label: `Script`,
            key: 1,
            disabled:  hideToolTip ? false : true,
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
            key: 2,
            disabled:  hideToolTip ? false : true,
            children: `Content of tab2`,
          },
          {
            label: `Text`,
            key: 3,
            disabled:  hideToolTip ? false : true,
            children: `Content of tab3`,
          },
          {
            label: `Images`,
            key: 4,
            disabled:  hideToolTip ? false : true,
            children: `Content of tab4`,
          },
          {
            label: `Uploads`,
            key: 5,
            disabled:  hideToolTip ? false : true,
            children: `Content of tab5`,
          },
        ]}
      />
    </div>
  );
};
export default TabsContainer;