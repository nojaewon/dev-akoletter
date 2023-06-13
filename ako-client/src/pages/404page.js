import '../css/404page.css';

function Page404(){
    return (
        <div className="container-404">
            <div className="content-404">
            <div className="image-wrapper">
                <img src={`${process.env.PUBLIC_URL}/ako/ako_love.png`} alt="404 이미지" className="error-image" />
            </div>
            <h1 className="title-404">404</h1>
            <h2 className="subtitle-404 pen">페이지를 찾을 수 없음</h2>
            <p className="message-404 pen">죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
            <a className="home-link-404" href="/">홈으로 돌아가기</a>
            </div>
        </div>
    )
}

export default Page404;