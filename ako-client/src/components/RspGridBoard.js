import ButtonGroup from "./ButtonGroup.js";
import '../css/RspGridBoard.css'

function RspGridBoard(prop){
    // props.row
    // props.col
    // props.url
    
    const ROW = 1;
    const COL = 3;
    const URL = "";
    const CARTEOGRY = ['전체', '정치', '경제', '세계', '테크', '노동', '환경', '인권', '문화', '라이프'];


    return (
        <section className="grid-board">
            <ButtonGroup target={CARTEOGRY}/>
            <div className="box">
                <a href="/detail" className="card">
                    <figure>
                        <img src="https://d2phebdq64jyfk.cloudfront.net/media/image/article/thumbnail/%EB%8B%A8%EC%8B%A0_1_OxF40gz.jpg" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>북한 전술핵탄두 공개: 작지만 위험하다</h3>
                        <time className="card-date">2023/03/30</time>
                        <i className="card-category">정치</i>
                    </div>
                </a>
                <a className="card"></a>
                <a className="card"></a>
                <a className="card"></a>
                <a className="card"></a>
                <a className="card"></a>
            </div>
        </section>
    );
}

export default RspGridBoard;