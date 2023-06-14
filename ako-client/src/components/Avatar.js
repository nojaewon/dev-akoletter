import {Link, useNavigate} from 'react-router-dom';
import { Avatar, Space, Tooltip, notification, message } from 'antd';
import api from '../commonJS/api.js';

import '../css/Avatar.css';

const url2 =  `${process.env.PUBLIC_URL}/ako/ako_love.png`;

function ProfileAvatar({name, btnType, labeled, onClick, authorization, boardId}){
  const navigate = useNavigate();
  const [apim, contextHolder] = notification.useNotification();
  const [messageApi, contextHolder2] = message.useMessage();
  const openNotification = () => {
    if(btnType === 0){
      apim.open({
        message: 'Editor follow',
        description: '해당 에디터를 구독하여 관련 뉴스레터의 알림을 받을 수 있습니다.',
        style: {
          width: 600,
        },
      });
    } else {
      api.requestDeleteBoard(boardId, ...authorization).then(()=>{
        messageApi.open({
          type: 'loading',
          content: '캬드뉴스를 삭제하는 중입니다...',
          duration: 0,
        });
        // Dismiss manually and asynchronously
        setTimeout(messageApi.destroy, 1000);
        setTimeout(()=>{
          navigate('/')
        }, 1000)
      })
    }
  }


  const userImagePath = url2;

  // {{ props 정보 }}
  // name: 이름, imgSrc: 이미지 경로, btnType: -1(no button)/0(follow)/1(following)
  // labeled: 0(none)/1(block);

  const btnLabel = ['팔로우', '게시글 삭제']
  
  return (
    <Tooltip title="로그아웃" className="profile">
      {contextHolder}
      {contextHolder2}
      <Link className="avatar-container"
        onClick={onClick}
        style={{display: 'block', width: 45, height: 45, backgroundColor: '#eee'}}>
        <Space size={40} wrap style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -52%)'}}>
            <Avatar size={"large"} src={<img src={userImagePath} alt={`${name}님의 프로필`} />} />
        </Space>
      </Link>
      { labeled ? <h5 className='pen'>{name} 님</h5> : ""}
      { btnType === -1? "" : <button onClick={openNotification} className='pen'>{btnLabel[btnType]}</button>}
    </Tooltip>

    
  );
}
export default ProfileAvatar;