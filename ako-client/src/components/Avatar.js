import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

import '../css/Avatar.css';

const url = `${process.env.PUBLIC_URL}/ako/기본형아코얼굴_(designed by 박세리,원혜림).png`;
const url2 =  `${process.env.PUBLIC_URL}/ako/하트들고있는아코_(designed by 박세리,원혜림).png`;

function ProfileAvatar(props){
  const userID = props.userId;
  const userName = '아코';
  const userImagePath = url2;

  const btnType = ['팔로우', '팔로잉']
  
  return (
    <div className="profile">
      <div className="avatar-container">
        <Space size={40} wrap>
          <Avatar size={"large"} src={<img src={userImagePath} alt={`${userName}님의 프로필`} />} />
        </Space>
      </div>
      <h5 className='pen'>{userName} 님</h5>
      <button className='pen'>{btnType[0]}</button>
    </div>

    
  );
}
export default ProfileAvatar;