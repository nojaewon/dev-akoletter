import '../css/RspHeader.css'

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Modal} from 'antd';

import { Link } from 'react-router-dom'

// React Hook
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// import action func
import { setLogin } from '../store/modules/Login.js';

// components
import ProfileAvatar from './Avatar.js';

// api
import api from '../commonJS/api';


const navHeight = 80;

// 헤더는 세션관리를 할 수 있는 컴포넌트로 개발
// 새로고침시 세션에 로그인 정보가 있다면 리덕스 스토어에 다시 넣어주는 역할

function RspHeader(){
    const navigate = useNavigate();
    const hamburgerButton = useRef();
    const nav = useRef();

    // action dispatch
    const dispatch = useDispatch();
    const onLogin = (token, usrId, usrNm) => dispatch(setLogin(token, usrId, usrNm));

    const { usrNm, token } = useSelector(state => ({
        usrNm: state.login.usrNm,
        token: state.login.token
    }));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    // 로그아웃을 수락한 경우의 실행 함수
    const handleOk = () => {
        setIsModalOpen(false);

        api.getLogOutRequest(token.access_token);
        sessionStorage.clear();

        onLogin(null, null, null);
        navigate('/');
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // 새로고침시에 로그인 정보 확인
    useEffect(()=>{
        const tk = JSON.parse(sessionStorage.getItem('token'))
        const id = sessionStorage.getItem('usrId');
        const nm = sessionStorage.getItem('usrNm');

        if (tk){
            onLogin(tk, id, nm);
        }
    }, [])

    // 로그인 시 프로필 변경
    const profile = ()=>{
        if(usrNm == null){
            return (
                <Link to="/signup">
                    <Space size={16}>
                            <Avatar size={"defalut"} icon={<UserOutlined />} />				
                    </Space>
                </Link>
            );
        } else {
            // link는 내 프로필로 들어가는 URL을 넣어야 함.
            return(
                    <ProfileAvatar
                        name={usrNm}
                        btnType={-1}
                        labeled={false}
                        link={"/"}
                        onClick={showModal}
                    />
            );
        }
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
            <Modal title="로그아웃을 하시겠습니까?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}></Modal>

            <div className="box">
                <h1 className="title"><Link className='pen' to="/">AKO Letter</Link></h1>
                <nav className='links' ref={nav}>
                    
                </nav>
                <nav className='functions'>
                    {/* <Link href="#" className='search'>
                        <span style={{color: '#fff'}} className="material-symbols-outlined">search</span>
                    </Link> */}
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