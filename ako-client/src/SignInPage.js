import './App.css';
import './App768.css';
import './App1440.css';


import Header from "./components/Header.js";
import LoginBanner from "./components/LoginBanner.js"
import Footer from './components/Footer.js';

function SignInPage() {
  return (
    <div className="App">
      <Header />
      <div className="contents">
            <div className="login-banner">
                <div className="login-banner-desc">
                    <p className="pen-font">동국대학교 캡스톤 디자인에서 만드는 카드뉴스 SNS입니다!</p>
                    <p className="pen-font">한번 내가 만든 뉴스레터로 사람들과 소통해보세요!</p>  
                </div>
                <div className="banner-images">
                    <img className="login-banner-aco" src={`${process.env.PUBLIC_URL}/ako/빼꼼아코_\(designed\ by\ 원혜림\).png`} alt="빼꼼 아코" />
                </div>
            </div>
            <div className="login-container">
                <div className="login">
                    <h1 className="pen-font">Sing In</h1>
                    <form method='POST' action='/member/join'>
                        <input type="text" placeholder="Name" required="required" />
                        <input type="tel" placeholder="Tel. 010-1234-5678" required="required" />
                        <input type="text" placeholder="ID" required="required" />
                        <input type="email" placeholder="Email@akoletter.com" required="required" />
                        <input type="password"  placeholder="Password" required="required" />
                        <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
                    </form>
                    <p className="login-links pen-font">
                        <a href="/">Go Back</a>
                        <a href="#">Help</a>
                    </p>
                </div>

               
            </div>
        </div>
      <Footer />
      <a href="#" className='edit-button'>
        <span className="material-symbols-outlined ">edit_square</span>
      </a>
    </div>
  );
}

export default SignInPage;