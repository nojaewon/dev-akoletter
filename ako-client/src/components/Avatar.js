import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

import '../css/Avatar.css';

const url = `${process.env.PUBLIC_URL}/ako/기본형아코얼굴_(designed by 박세리,원혜림).png`;
const url2 =  `${process.env.PUBLIC_URL}/ako/하트들고있는아코_(designed by 박세리,원혜림).png`;

function ProfileAvatar({name, imgSrc, btnType, labeled}){
  const userImagePath = url2;

  // {{ props 정보 }}
  // name: 이름, imgSrc: 이미지 경로, btnType: -1(no button)/0(follow)/1(following)
  // labeled: 0(none)/1(block);

  const btnLabel = ['팔로우', '팔로잉']
  
  return (
    <div className="profile">
      <div className="avatar-container">
        <Space size={40} wrap>
          <Avatar size={"large"} src={<img src={userImagePath} alt={`${name}님의 프로필`} />} />
        </Space>
      </div>
      { labeled ? <h5 className='pen'>{name} 님</h5> : ""}
      { btnType === -1? "" : <button className='pen'>{btnLabel[btnType]}</button>}
    </div>

    
  );
}
export default ProfileAvatar;