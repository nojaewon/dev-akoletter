import '../css/RspFooter.css';

function Footer(){
    return (
        <footer>
            <p className="footer-links">&copy;2023 All Rights Reserved.
                <a href="#">동국대학교 </a> | 
                <a href="#">정보통신공학과 </a> | 
                <a href="#">캡스톤디자인 </a> | 
                <a href="#">서비스 약관 </a> | 
                <a href="#">개인정보 보호</a> | 
                <a href="#">결제이용약관</a> | 
                <a href="#">도움말</a> | 
                <a href="#">광고 문의</a>
            </p>
            <p className="footer-logos">
                <a href="#"><img src={`${process.env.PUBLIC_URL}/img/facebook-logo.png`} alt="페이스북" /></a>
                <a href="#"><img src={`${process.env.PUBLIC_URL}/img/twitter-logo.png`} alt="트위터" /></a>
                <a href="#"><img src={`${process.env.PUBLIC_URL}/img/instagram-logo.png`} alt="인스타그램" /></a>
            </p>
            <div className="footer-info">
                <p>서버 및 인프라 : 임현준(2018112), 박시현(2018112)</p>
                <p>프론트 및 API : 정이건(2020112)</p>
                <p>UI 디자인 및 프론트 : 노재원(2018112098)</p>
                <p>이 서비스는 동국대학교 4학년 과목 캡스톤 디자인1의 졸업 작품입니다.</p>
                <p className="footer-info-version">version: 1.0.1v</p>
            </div>
        </footer>
    );
}

export default Footer