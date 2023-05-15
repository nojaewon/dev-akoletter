import ButtonGroup from "./ButtonGroup.js";
import '../css/RspGridBoard.css'

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import api from '../commonJS/api.js';


function RspGridBoard(prop){
    const [contents, setContents] = useState([]);
    // props.row
    // props.col
    
    const ROW = 1;
    const COL = 3;
    const CARTEOGRY = ['전체', '정치', '경제', '세계', '테크', '노동', '환경', '인권', '문화', '라이프'];

    const { usrNm } = useSelector(state => ({
        usrNm: state.login.usrNm
    }));

    useEffect(()=>{
        api.getPostList()
            .then(res=>setContents(res.data))
    }, []);

    const postlist = contents.map((post)=>{
        return (
            <Link key={post.postId} to="/" className="card">
                <figure>
                    <img src={`${process.env.PUBLIC_URL}/img/polono_cardnews.png`} alt="temp" />
                </figure>
                <div className="card-body">
                    <h3>{post.postTitle}</h3>
                    <time className="card-date">{post.frstRgstDt}</time>
                    <i className="card-category">{post.unqUsrId}</i>
                </div>
            </Link>
        )
    })

    return (
        <section className={`grid-board ${ usrNm && "header-padding"}`}>
            <ButtonGroup target={CARTEOGRY}/>
            <div className="box">
                <Link to="/detail" className="card">
                    <figure>
                        <img src="https://d2phebdq64jyfk.cloudfront.net/media/image/article/thumbnail/%EB%8B%A8%EC%8B%A0_1_OxF40gz.jpg" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>북한 전술핵탄두 공개: 작지만 위험하다</h3>
                        <time className="card-date">2023/03/30</time>
                        <i className="card-category">정치</i>
                    </div>
                </Link>
                <Link to="/post/postdetail/1" className="card">
                <figure>
                    <img src="https://sfs.synnara.co.kr/App/ImageViewerEShop?IID=EX000033546&FMT=2&ATTACH=EX&TYPE=1" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>피프티피프티 빌보드 입성</h3>
                        <time className="card-date">2023/03/30</time>
                        <i className="card-category">연예</i>
                    </div>
                </Link>
                <Link className="card">
                <figure>
                    <img src="https://d2phebdq64jyfk.cloudfront.net/media/image/article/thumbnail/%EB%8B%A8%EC%8B%A0_1_RydzRPG.jpg" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>강원도 산불이 반복되는 이유</h3>
                        <time className="card-date">2023/03/30</time>
                        <i className="card-category">정치</i>
                    </div>
                </Link>
                <Link className="card">
                <figure>
                    <img src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fsports-phinf.pstatic.net%2F20230413_170%2F1681366703306yKlCv_JPEG%2FGettyImages-125176480911.jpg%22&type=nf464_260" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>NBA 시카고-오클라호마시티</h3>
                        <time className="card-date">2023/03/30</time>
                        <i className="card-category">정치</i>
                    </div>
                </Link>
                <Link className="card">
                <figure>
                    <img src="https://img6.yna.co.kr/photo/yna/YH/2022/07/07/PYH2022070709930001300_P4.jpg" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>국내기업, 미국 반도체정책 수혜보다 부정영향 커</h3>
                        <time className="card-date">2023/03/30</time>
                        <i className="card-category">정치</i>
                    </div>
                </Link>
                <Link className="card">
                <figure>
                    <img src="https://img6.yna.co.kr/photo/cms/2023/04/12/81/PCM20230412000181005_P4.jpg" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>킬링 로맨스, 호불호가 많이 갈려</h3>
                        <time className="card-date">2023/04/11</time>
                        <i className="card-category">연예</i>
                    </div>
                </Link>
                <Link className="card">
                <figure>
                    <img src="https://img1.yna.co.kr/etc/inner/KR/2023/04/13/AKR20230413085900005_01_i_P4.jpg" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>자연의 경이로움은 뒤뜰에도 있다</h3>
                        <time className="card-date">2023/03/30</time>
                        <i className="card-category">문화</i>
                    </div>
                </Link>
                <Link className="card">
                <figure>
                    <img src="https://img8.yna.co.kr/photo/yna/YH/2023/04/13/PYH2023041313330005200_P4.jpg" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>3년째 따오기 번식 성공</h3>
                        <time className="card-date">2023/04/12</time>
                        <i className="card-category">문화</i>
                    </div>
                </Link>
                <Link className="card">
                <figure>
                    <img src="https://img5.yna.co.kr/etc/inner/KR/2023/04/13/AKR20230413078900056_01_i_P4.jpg" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>한라산 청정 고사리 축제</h3>
                        <time className="card-date">2023/04/13</time>
                        <i className="card-category">라이프</i>
                    </div>
                </Link>
                <Link className="card">
                <figure>
                    <img src="https://img1.yna.co.kr/photo/ap/2023/04/08/PAP20230408195201009_P4.jpg" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>ELP 손흥민 100골 돌파</h3>
                        <time className="card-date">2023/04/30</time>
                        <i className="card-category">스포츠</i>
                    </div>
                </Link>
                {postlist}
                {/* <Link className="card">
                <figure>
                    <img src="https://img0.yna.co.kr/photo/cms/2016/03/25/01/C0A8CA3D00000153AB78E9C80002A62F_P4.jpeg" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>복통 구토 논란 방울토마토 전량 폐기</h3>
                        <time className="card-date">2023/03/30</time>
                        <i className="card-category">산업</i>
                    </div>
                </Link>
                <Link className="card">
                <figure>
                    <img src="https://img1.yna.co.kr/photo/yna/YH/2023/04/12/PYH2023041212790034000_P4.jpg" alt="temp" />
                    </figure>
                    <div className="card-body">
                        <h3>외교부, 미얀마군 민간인 공습에 "깊은 우려"</h3>
                        <time className="card-date">2023/04/13</time>
                        <i className="card-category">정치</i>
                    </div>
                </Link> */}
                


            </div>
        </section>
    );
}

export default RspGridBoard;