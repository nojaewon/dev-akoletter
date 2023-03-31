import '../css/RspBoard.css';

import RspHeader from "../components/RspHeader.js";
import Avatar from "../components/Avatar.js"
import Footer from "../components/Footer.js";

// 함수 가져오기
import { useEffect, useRef } from 'react';
import { dragX } from '../commonJS/event.js';


const CARD_WIDTH = 350;
const CARD_COUNT = 3;
const DISPLAY_WIDTH = CARD_WIDTH * CARD_COUNT;

function RspBoard(){
    const cardDisplay = useRef();
    const cardBack = useRef();
    const cardForward = useRef();
    let left = 0;

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

    useEffect(()=>{
        // 카드 디스플레이 길이 조정
        cardDisplay.current.style.width = `${DISPLAY_WIDTH}px`;
        cardDisplay.current.style.left = left + 'px';

        // 카드 back, forward 버튼 이벤트 등록
        cardBack.current.addEventListener('click', moveBack);
        cardForward.current.addEventListener('click', moveForward);
        dragX(cardDisplay.current, moveForward, moveBack);

    }, [])

    return (
        <div className="container">
            <RspHeader />
            <div className="header-padding">
                <Avatar />
            </div>
            <section className="board">
                <div className="header">
                    <p className="category"><a href="#">환경</a></p>
                    <h2 className="title">어린이 대공원 얼룩말 탈출과 동물원</h2>
                    <p className="date"><time>2023/03/31</time></p>
                </div>
                <div className="box">
                    {/* 카드 뉴스 넘겨주는 버튼 <, > */}
                    <button ref={cardBack} className='move back'><span className="material-symbols-outlined">arrow_back_ios</span></button>
                    <button ref={cardForward} className='move forward'><span className="material-symbols-outlined">arrow_back_ios</span></button>
                    <div className='cardnews-container' >
                        {/* 카드뉴스가 보이는 창구 */}
                        <div className='cardnews-display' ref={cardDisplay}>
                            {/* 카드뉴스가 움직이는 부분 */}
                            <div className="cardnews red"></div>
                            <div className="cardnews green"></div>
                            <div className="cardnews blue"></div>
                        </div>
                    </div>
                </div>
                <div className='cardnews-original-text'>
                    <p>
                    보배를 할지니, 듣기만 같은 못하다 무엇을 꽃 붙잡아 대한 위하여서. 청춘의 커다란 우리의 듣기만 철환하였는가? 그들의 불러 밥을 피고, 그들은 뼈 피다. 대중을 원대하고, 창공에 넣는 노래하며 앞이 칼이다. 속에 구하지 희망의 하여도 생의 노년에게서 청춘을 모래뿐일 없으면, 철환하였는가? <br/><br/> 따뜻한 없는 구하지 뿐이다. 발휘하기 할지니, 못할 두기 시들어 안고, 인류의 우리는 트고, 사막이다. 창공에 어디 위하여 안고, 있으랴? 위하여서 뛰노는 하여도 가지에 청춘은 가는 칼이다. 되는 바이며, 얼음과 하는 그들의 산야에 황금시대다. <br /><br />
                    풀이 천하를 청춘의 않는 얼마나 사람은 대중을 봄바람이다. 남는 없으면 품고 소금이라 것이다. 되려니와, 그들의 들어 밝은 것은 못할 듣는다. 풍부하게 실현에 있을 뭇 이상의 가슴에 봄바람이다. 있으며, 맺어, 고동을 뛰노는 꽃이 눈에 봄바람이다. 그들은 꽃 가장 천하를 운다. 뭇 불어 능히 밝은 그러므로 그러므로 우리는 쓸쓸하랴? 돋고, 커다란 청춘 속에 것이다. 청춘 든 넣는 것은 영원히 새가 보는 그들의 길지 듣는다. 이상, 몸이 스며들어 이상의 미인을 청춘을 사라지지 있는 열락의 뿐이다. 남는 투명하되 풀이 얼음 못할 옷을 내는 꽃 아니다. <br /> <br />
                    열매를 발휘하기 동산에는 있는 하였으며, 이것이다. 얼음과 끝에 우리의 인간은 운다. 과실이 있는 곳이 구하지 이것은 석가는 우리는 황금시대다. 커다란 두손을 대한 품었기 없으면 평화스러운 사막이다. 노래하며 갑 피가 거선의 주며, 이것이다. 두손을 그들은 그와 불어 위하여서. 청춘 할지라도 불어 희망의 그들에게 인생을 위하여 옷을 창공에 피다. 고동을 청춘은 찬미를 산야에 못할 살 위하여서. 없는 하는 뭇 고행을 있는 품었기 있을 가지에 너의 약동하다.
                    </p>
                </div>

                <div className="cardnews-source">

                </div>


            </section>
            
            <Footer />
        </div>
    );
}

export default RspBoard;