import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
const url = `${process.env.PUBLIC_URL}/ako/기본형아코얼굴_(designed by 박세리,원혜림).png`;

const ProfileAvatar = () => (
  <Space size={40} wrap>
    <Avatar src={<img src={url} alt="avatar" />} />
  </Space>
);
export default ProfileAvatar;