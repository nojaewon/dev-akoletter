
function LoginBanner(){
    return (
        <div className="main-banner">
            <div className="main-banner-img"></div>
            <div className="main-banner-login">
                <h2 className="banner-title pen-font">세상 돌아가는 건 알고 살아야지 뿌우!🐘</h2>
                <p className="banner-desc">
                    지금 "345,012"명이 서비스를 사용중이에요🙂<br />
                    세상 돌아가는 소식, 우리 아코들은 놓치지 말고, 직접 보고, 알려주세요!<br />
                    뉴스레터를 통해 하루 5분, 세상을 향해 표현해요!
                </p>
                <form>
                    <input className="email-in" type="text" placeholder="akoletter@gmail.com" />
                    <input className="password-in" type="password" placeholder="password" />
                    <button type="submit">
                        <span className="button-title pen-font">start</span>
                    </button>
                </form>
                <div class="account-help">
                    <a href="#">sign in</a>
                    <a href="#">help</a>
                </div>
            </div>
        </div>
    );
}

export default LoginBanner;