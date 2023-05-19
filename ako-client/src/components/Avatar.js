import {Link} from 'react-router-dom';

import { Avatar, Space } from 'antd';

import '../css/Avatar.css';

const url = `${process.env.PUBLIC_URL}/ako/ako_face.png`;
const url2 =  `${process.env.PUBLIC_URL}/ako/ako_love.png`;

function ProfileAvatar({name, imgSrc, btnType, labeled, href, onClick}){
  const userImagePath = url2;

  // {{ props 정보 }}
  // name: 이름, imgSrc: 이미지 경로, btnType: -1(no button)/0(follow)/1(following)
  // labeled: 0(none)/1(block);

  const btnLabel = ['팔로우', '팔로잉']
  
  return (
    <div className="profile">
      <Link className="avatar-container"
        onClick={onClick}
        style={{display: 'block', width: 45, height: 45, backgroundColor: '#eee'}}>
        <Space size={40} wrap style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -52%)'}}>
            <Avatar size={"large"} src={<img src={userImagePath} alt={`${name}님의 프로필`} />} />
        </Space>
      </Link>
      { labeled ? <h5 className='pen'>{name} 님</h5> : ""}
      { btnType === -1? "" : <button className='pen'>{btnLabel[btnType]}</button>}
    </div>

    
  );
}
export default ProfileAvatar;