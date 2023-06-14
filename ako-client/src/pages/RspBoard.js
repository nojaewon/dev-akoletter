import '../css/RspBoard.css';

// components
import RspHeader from "../components/RspHeader.js";
import ProfileAvatar from "../components/Avatar.js"
import Footer from "../components/Footer.js";

// react
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//antd
import {List} from 'antd';


// 함수 가져오기
import { dragX } from '../commonJS/event.js';
import api from '../commonJS/api.js';

function getCardWidth(){
    if (window.innerWidth <= 300){
        return 260
    }
    else if (window.innerWidth <= 380){
        return 300
    } 

    return 375
}

const CARTEOGRY = ['전체', '정치', '경제', '세계', '테크', '노동', '환경', '인권', '문화', '라이프'];
let CARD_WIDTH = getCardWidth();
let CARD_COUNT = 3;
let DISPLAY_WIDTH = CARD_WIDTH * CARD_COUNT;

function RspBoard(){
    const { usrId, accessToken } = useSelector(state => ({
        usrId: state.login.usrId,
        accessToken: state.login.token == null ? "" : state.login.token.accessToken
    }));

    const cardDisplay = useRef();
    const cardBack = useRef();
    const cardForward = useRef();
    // boardId를 가져오기 위한 객체 => ex) param.id
    const boardId = useParams().id;
    const [board, setBoard] = useState({
        postTitle: "",
        fileId: "",
        usrId: "늙코",
        frstRgstId: "",
        postContent: "",
        category: "",
        urlList: ""
    });
    let left = 0;

    useEffect(()=>{
        // 카드 디스플레이 길이 조정
        CARD_WIDTH = getCardWidth();
        CARD_COUNT = 3;
        DISPLAY_WIDTH = CARD_WIDTH * CARD_COUNT;

        cardDisplay.current.style.width = `${DISPLAY_WIDTH}px`;
        cardDisplay.current.style.left = left + 'px';

        const moveBack = ()=>{
            if(left > 0){
                left -= CARD_WIDTH;
                cardDisplay.current.style.left = -1* left + 'px';
            }
        }
    
        const moveForward = ()=>{
            if(left < DISPLAY_WIDTH - CARD_WIDTH){
                left += CARD_WIDTH;
                cardDisplay.current.style.left = -1 * left + 'px';
            }
        }

        // 카드 back, forward 버튼 이벤트 등록
        cardBack.current.addEventListener('click', moveBack);
        cardForward.current.addEventListener('click', moveForward);
        dragX(cardDisplay.current, moveForward, moveBack);
        
        api.getPostDetail(boardId).then((res)=>{
            const detail = res.data;
            setBoard(detail)
        })
    }, [])

    // 카드뉴스 이미지 로딩
    useEffect(()=>{
        return ()=>{
            const base64Images = document.querySelectorAll(".cardnews>img");
            Array.from(base64Images).forEach((img)=>{
                api.getBase64Image(img.dataset.file).then(url=>{
                    img.src = `data:image/png;base64,${url}`
                })
            })
        }
    })

    return (
        <div className="container">
            <RspHeader />
            <div className="header-padding">
                <ProfileAvatar
                    name={board.usrId}
                    authorization={[usrId, accessToken]}
                    labeled={true}
                    btnType={usrId === board.usrId ? 1 : 0}
                    boardId={boardId}
                />
            </div>
            <section className="board">
                <div className="header">
                    <p className="category"><a href="/" onClick={(e)=>{
                        e.preventDefault();
                    }}>{CARTEOGRY[board.category]}</a></p>
                    <h2 className="title">{board.postTitle}</h2>
                    <p className="date"><time>{board.frstRgstId}</time></p>
                </div>
                <div className="box">
                    {/* 카드 뉴스 넘겨주는 버튼 <, > */}
                    <button ref={cardBack} className='move back'><span className="material-symbols-outlined">arrow_back_ios</span></button>
                    <button ref={cardForward} className='move forward'><span className="material-symbols-outlined">arrow_back_ios</span></button>
                    <div className='cardnews-container' >
                        {/* 카드뉴스가 보이는 창구 */}
                        <div className='cardnews-display' ref={cardDisplay}>
                            {/* 카드뉴스가 움직이는 부분 */}
                            <div className="cardnews">
                                <img data-file={board.fileId} src={`${process.env.PUBLIC_URL}/ako/ako_love.png`} alt="카드뉴스 페이지1" />
                            </div>
                            <div className="cardnews">
                                <img data-file={board.fileId+1} src={`${process.env.PUBLIC_URL}/ako/ako_love.png`} alt="카드뉴스 페이지2" />
                            </div>
                            <div className="cardnews">
                                <img data-file={board.fileId+2} src={`${process.env.PUBLIC_URL}/ako/ako_love.png`} alt="카드뉴스 페이지3" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cardnews-original-text'>
                    <p>
                        {board.postContent}
                    </p>
                </div>

                <div className="cardnews-source">
                    <List
                        size="small"
                        header={<div>이 뉴스레터는 아래의 뉴스들을 참고했습니다.</div>}
                        bordered
                        dataSource={board.urlList && board.urlList.split(", ")}
                        renderItem={(item) => <List.Item><a style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"}}
                         href={item} target='_blank'>{item}</a></List.Item>}
                    />
                </div>


            </section>
            
            <Footer />
        </div>
    );
}

export default RspBoard;