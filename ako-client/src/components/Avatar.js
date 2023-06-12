import {Link} from 'react-router-dom';

import { Avatar, Space, Tooltip, notification } from 'antd';

import '../css/Avatar.css';

const url = `${process.env.PUBLIC_URL}/ako/ako_face.png`;
const url2 =  `${process.env.PUBLIC_URL}/ako/ako_love.png`;

function ProfileAvatar({name, imgSrc, btnType, labeled, href, onClick}){
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message:  btnType==0 ? 'Editor follow' : 'Editor following',
      description:
        btnType==0 ?
        '해당 에디터를 구독하여 관련 뉴스레터의 알림을 받을 수 있습니다.':
        '더이상 이 에디터의 뉴스레터를 알림으로 받지 않습니다.',
      style: {
        width: 600,
      },
    });
  }


  const userImagePath = url2;

  // {{ props 정보 }}
  // name: 이름, imgSrc: 이미지 경로, btnType: -1(no button)/0(follow)/1(following)
  // labeled: 0(none)/1(block);

  const btnLabel = ['팔로우', '팔로잉']
  
  return (
    <Tooltip title="로그아웃" className="profile">
      {contextHolder}
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