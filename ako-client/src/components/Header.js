import ProfileAvatar from "./Avatar.js";

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space} from 'antd';

const NAV = ['Open Profile', 'Q&A'];

function Header(){
	const NAV_LIST = NAV.map((nav_item) =>
		<li><a href="#">{nav_item}</a></li>
	);

  return (
    <header className="header">
			<h1 className="title">
				<a className="pen-font" href="#">AKO Letter</a>
			</h1>
			<ul className="nav-menu">
				{NAV_LIST}
			</ul>
			<ul className="func-menu">
				<li>
					<a href="#">
						<Space size={16}>
							<Avatar icon={<UserOutlined />} />				
						</Space>
					</a>
				</li>
				<li><a href="#"><ProfileAvatar /></a></li>
			</ul>	
    </header>
  );
}

export default Header;