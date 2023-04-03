import '../css/RspLoginBanner.css';
import { Button, Space } from 'antd';

// react modules
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import action func
import { setLogin } from '../store/modules/Login.js';

// import commonJS module
import api from '../commonJS/api.js';

function RspLoginBanner(){

    // dom refs
    const input_id = useRef();
    const input_pw = useRef();

    // action dispatch
    const dispatch = useDispatch();
    const onLogin = (token, usrId, usrNm) => dispatch(setLogin(token, usrId, usrNm));

    // 로그인 버튼 클릭 시
    const loginRequest = ()=>{
        const id = input_id.current.value;
        const pw = input_pw.current.value;

        api.requestLogin(id, pw).then((data)=>{
            onLogin(data.token, data.usrId, data.usrNm);
        })
    }


    return(
        <section className="login-banner header-padding">
            <div className="box">
                <h2 className='pen'>세상 돌아가는 건 알고 살아야지 뿌우!🐘</h2>
                <div className="banner-img">
                    <img src={`${process.env.PUBLIC_URL}/ako/하트들고있는아코_(designed by 박세리,원혜림).png`} alt="하트 들고 있는 아코" />
                </div>
                <form>
                    <div className="login-container">
                        <p className="banner-desc">
                            지금 "345,012"명이 서비스를 사용중이에요🙂<br />
                            세상 돌아가는 소식, 우리 아코들은 놓치지 말고, 직접 보고, 알려주세요!<br />
                            뉴스레터를 통해 하루 5분, 세상을 향해 표현해요!
                        </p>
                        <input ref={input_id} type="text" placeholder='아이디를 입력해주세요' />
                        <input ref={input_pw} type="password" placeholder='비밀번호를 입력해주세요' />
                        <Space wrap className='login-btn'>
                            <Button onClick={loginRequest}>시작하기</Button>
                        </Space>
                        <Link to="/signup">회원가입</Link>
                        <Link to="#">계정을 모르시나요?</Link>
                    </div>
                </form>

            </div>
        </section>
    );
}

export default RspLoginBanner;