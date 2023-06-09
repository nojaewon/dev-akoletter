import React from 'react';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';

import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';

import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import { Button } from '@blueprintjs/core';

import { Workspace } from 'polotno/canvas/workspace';
import { SidePanel, SectionTab } from 'polotno/side-panel';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { createStore } from 'polotno/model/store';
import { DownloadButton } from 'polotno/toolbar/download-button';

import { DEFAULT_SECTIONS } from 'polotno/side-panel';
import api from '../commonJS/api';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd'

const COUNT_CARDNEWS = 3;
// create store
const store = createStore({
  // this is a demo key just for that project
  // (!) please don't use it in your projects
  // to create your own API key please go here: https://polotno.dev/cabinet
  key: 'EH5scaxDms-nGG_gATVu',
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
});
// add to global namespace for debugging
window.store = store;

// add page and element instantly

for(let i=0; i<COUNT_CARDNEWS; i++){
  const page = store.addPage();
  page.set({
    width: 720,
    height: 720
  })

  page.addElement({
    type: 'text',
    text: 'Hello AkoLetter',
    y: 100,
    x: 0,
    width: 500,
    fontSize: 20,
  })
}

// select second page
store.selectPage(store.pages[0].id);




export const Editor = (props) => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const waitAndRedirect = (link, time) => {
    messageApi.open({
      type: 'loading',
      content: '카드뉴스를 생성하는 중입니다...',
      duration: 0,
    });
    // Dismiss manually and asynchronously
    setTimeout(messageApi.destroy, time);
    setTimeout(()=>{
      navigate(link)
    }, time)
  };

  const NewsSection = {
    name: 'news-section',
    Tab: (props) => (
      <SectionTab name="News" {...props}>
        <span className="material-symbols-outlined" style={{fontSize: '16px', transform: 'translateY(5px) scale(1.4)'}}>
        feed
        </span>
      </SectionTab>
    ),
  
    Panel: observer(() => {
      const onCopy = (e) =>{
        navigator.clipboard.writeText(e.target.value).then(()=>{
          messageApi.open({
            type: 'success',
            content: '복사되었습니다',
            duration: 0,
          });
          // Dismiss manually and asynchronously
          setTimeout(messageApi.destroy, 1000);
        })

      };
      const inputClipBoard = props.formData.summary.map((sentence, idx)=>{
        return (
        <div key={idx}>
          <p>{sentence}</p>
          <button
          value={sentence}
          onClick={onCopy}
          style={{
            padding: '2px 15px'
          }}
        >Copy</button>
        <br /><br />
        </div>
        
        );
      })


      return (
        <div style={{height: '100%', overflow:'scroll'}}>
          <h1 style={{lineHeight: '50px', fontSize: '24px'}}><i>{props.formData.title}</i></h1>
          <h2 style={{lineHeight: '25px'}}><b>3줄 요약</b></h2> 
          <hr style={{ margin: "10px 0"}}/>
          <p>
            {inputClipBoard}
          </p>
          <br /> 
          <h2 style={{lineHeight: '35px'}}><b>뉴스 원문</b></h2>
          <hr style={{ margin: "10px 0"}}/>
          <p>
          {props.formData.content}
          </p>
              
        </div>
    );
  })
}

// add new section
  const sections = [NewsSection, ...DEFAULT_SECTIONS.slice(0, 7)];

  React.useEffect(() => {
    return autorun(() => {
      const textSelected = store.selectedElements[0]?.type === 'text';
      if (textSelected) {
        store.openSidePanel('custom-text');
      } else {
        store.openSidePanel('news-section');
      }
    });
  }, []);

  // Save 버튼
  const ActionControls = ({ store }) => {
    return (
      <div>
        <DownloadButton store={store} />
        <Button
          intent="primary"
          onClick={() => {
            const page0 = store.toBlob({pageId:store.pages[0].id,  mimeType: 'image/png'})
            const page1 = store.toBlob({pageId:store.pages[1].id,  mimeType: 'image/png'})
            const page2 = store.toBlob({pageId:store.pages[2].id,  mimeType: 'image/png'})
            
            Promise.all([page0, page1, page2]).then(blobs=>{
              const formDataForSubmit = new FormData();

              formDataForSubmit.append('request',new Blob([JSON.stringify({
                postTitle: props.formData.title,
                postContent: props.formData.content,
                category: props.formData.category,
                usrId: sessionStorage.getItem('usrId'),
                urlList: props.formData.references.join(", ")
              })], {type: "application/json"}))

              for(let i=0; i<COUNT_CARDNEWS; i++){
                const blob = blobs[i];
                formDataForSubmit.append('files', new File([blob], `cardnews${i}.png`, {
                  type: "image/png"
                }));
              }

              console.log(formDataForSubmit.get("request"))
              console.log(formDataForSubmit.getAll("files"));

              api.requestSavePost(formDataForSubmit)
                .then(res=>res.data)
                .then(data=>{
                  waitAndRedirect(`/post/postdetail/${data.postId}`, 2000)
                })
            })
          }}
        >
          Save
        </Button>
      </div>
    );
  };

  return (
    <div className='edit-container' style={{zIndex: 1005}}>
      {contextHolder}
      <PolotnoContainer className="polotno-app-container" style={{width: '100vw', height: '100vh'}}>
          <SidePanelWrap style={{ }}>
            <SidePanel store={store} sections={sections} style={{}}/>
          </SidePanelWrap>
          <WorkspaceWrap style={{width: '100vw', height:'100vh'}}>
            <Toolbar store={store} style={{padding: '0'}} components={{ActionControls}}/>
            <Workspace store={store} style={{}} components={{ PageControls: () => null }}/>
            <ZoomButtons store={store} />
          </WorkspaceWrap>
        </PolotnoContainer>
    </div>
    
  );
};

export default Editor;