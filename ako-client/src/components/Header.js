import ProfileAvatar from "./Avatar.js";

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space} from 'antd';

import { useState, useEffect, useRef } from "react";

const NAV = ['Open Profile', 'Q&A'];

// window.addEventListener('resize', (e) => {
// 	console.log(e);
   
// })

function Header(){
	let browserWidth = 0;
	const pageLinksMenu = useRef();
	const headerTitle = useRef();

	// 브라우저 너비를 알고 햄버거 버튼 작성하기 위한 함수
	useEffect(() => {
		window.addEventListener('resize', () => {
			browserWidth = document.body.clientWidth;

			// 모바일용 햄버거 버튼 클래스 삽입
			if(browserWidth < 650) {
				headerTitle.current.innerText = 'AKO'
				pageLinksMenu.current.classList.add('hamburger');
			} else {
				headerTitle.current.innerText = 'AKO Letter'
				pageLinksMenu.current.classList.remove('hamburger');
			}
		})
	  }, []);


	const NAV_LIST = NAV.map((nav_item) =>
		<li key={nav_item}><a href="#">{nav_item}</a></li>
	);

  return (
    <header className="header">
			<h1 className="title">
				<a className="pen-font" href="#" ref={headerTitle}>AKO Letter</a>
			</h1>
			<ul className="nav-menu" ref={pageLinksMenu}>
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