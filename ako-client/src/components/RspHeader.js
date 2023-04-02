import '../css/RspHeader.css'

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space} from 'antd';

import { Link } from 'react-router-dom'

// React Hook
import { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux'

// components
import ProfileAvatar from './Avatar.js';


const navHeight = 80;

function RspHeader(){
    const hamburgerButton = useRef();
    const nav = useRef();

    const { usrNm } = useSelector(state => ({
        usrNm: state.login.usrNm
    }));

    console.log(usrNm);

    // 로그인 시 프로필 변경
    const profile = ()=>{
        if(usrNm == null){
            return (
                <Link href="#">
                    <Space size={16}>
                            <Avatar size={"defalut"} icon={<UserOutlined />} />				
                    </Space>
                </Link>
            );
        } else {
            return <ProfileAvatar
                name={usrNm}
                btnType={-1}
                labeled={false}
            />
        }

        return (
            <Link href="#">
                <Space size={16}>
                        <Avatar size={"defalut"} icon={<UserOutlined />} />				
                </Space>
            </Link>
        );
    }

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
                <h1 className="title"><Link className='pen' to="/">AKO Letter</Link></h1>
                <nav className='links' ref={nav}>
                    <Link to="#">Editor Of This Weekend</Link>
                    <Link to="#">Q&A</Link>
                </nav>
                <nav className='functions'>
                    <Link href="#" className='search'>
                        <span className="material-symbols-outlined">search</span>
                    </Link>
                    {profile()}
                    <Link href="#" ref={hamburgerButton} id="hamburger">
                        <span className="material-symbols-outlined">menu</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default RspHeader;