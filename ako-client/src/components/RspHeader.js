import '../css/RspHeader.css'

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space} from 'antd';

// React Hook
import { useState, useEffect, useRef } from "react";

const navHeight = 80;

function RspHeader(){
    const hamburgerButton = useRef();
    const nav = useRef();

    let navOut = false;

    useEffect(()=>{
        hamburgerButton.current.addEventListener('click', ()=>{
            if(!navOut){
                nav.current.style.height = navHeight + 'px';
            } else {
                nav.current.style.height = 0 + 'px';
            }
            navOut = !navOut;
        })
    }, [])

    return (
        <header>
            <div className="box">
                <h1 className="title"><a className='pen' href="/">AKO Letter</a></h1>
                <nav className='links' ref={nav}>
                    <a href="#">Editor Of This Weekend</a>
                    <a href="#">Q&A</a>
                </nav>
                <nav className='functions'>
                    <a href="#">
                        <span className="material-symbols-outlined">search</span>
                    </a>
                    <a href="#">
                        <Space size={16}>
                                <Avatar size={"defalut"} icon={<UserOutlined />} />				
                        </Space>
                    </a>
                    <a href="#" ref={hamburgerButton} id="hamburger">
                        <span className="material-symbols-outlined">menu</span>
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default RspHeader;