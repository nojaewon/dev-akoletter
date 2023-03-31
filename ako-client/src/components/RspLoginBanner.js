import '../css/RspLoginBanner.css'

function RspLoginBanner(){
    return(
        <section className="login-banner header-padding">
            <div className="box">
                <h2 className='pen'>세상 돌아가는 건 알고 살아야지 뿌우!🐘</h2>
                <div className="banner-img">
                    <img src={`${process.env.PUBLIC_URL}/ako/하트들고있는아코_(designed by 박세리,원혜림).png`} alt="하트 들고 있는 아코" />
                </div>
                <form action="">
                    <div className="login-container">
                        <p className="banner-desc">
                            지금 "345,012"명이 서비스를 사용중이에요🙂<br />
                            세상 돌아가는 소식, 우리 아코들은 놓치지 말고, 직접 보고, 알려주세요!<br />
                            뉴스레터를 통해 하루 5분, 세상을 향해 표현해요!
                        </p>
                        <input type="text" placeholder='아이디를 입력해주세요' />
                        <input type="password" placeholder='비밀번호를 입력해주세요' />
                        <button type="submit">시작하기</button>
                        <a href="#">회원가입</a>
                        <a href="#">계정을 모르시나요?</a>
                    </div>
                    
                </form>

            </div>
        </section>
    );
}

export default RspLoginBanner;