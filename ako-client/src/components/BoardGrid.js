import {Button, ButtonGroup} from '@mui/material'

const cartegory = ['정치', '시사', '환경', '연예', '인권', '여행']

function BoardGrid(){
    const BUTTONS = cartegory.map((el)=>
            <Button key={el}>{el}</Button>
        )
    
    return (
        <div className="board-container">
            <div className="board-controller-container">
                <div className="board-controller">
                    <ButtonGroup size='small' fullWidth={true} variant="text" aria-label="text button group">
                        {BUTTONS}
                    </ButtonGroup>
                </div>
            </div>
            <button className="more pen-font">더 보기</button>
            <div className="board">
                <div className="item">
                    <div className="item-banner">
                        <img src={`${process.env.PUBLIC_URL}/img/human_right(banner).jpg`} alt="학생인권조례 페지 논란" />
                    </div>
                    <div className="item-info">
                        <div className="item-title">학생인권조례 폐지 논란</div>
                        <span className="item-date">2023/03/18</span>
                        <span className="item-cartegory">인권</span>
                    </div>
                </div>
                <div className="item"></div>
                <div className="item">
                    <div className="item-banner">
                        <img src={`${process.env.PUBLIC_URL}/img/human_right(banner).jpg`} alt="학생인권조례 페지 논란" />
                    </div>
                    <div className="item-info">
                        <div className="item-title">학생인권조례 폐지 논란</div>
                        <span className="item-date">2023/03/18</span>
                        <span className="item-cartegory">인권</span>
                    </div>
                </div>
                <div className="item"></div>
                <div className="item">
                    <div className="item-banner">
                        <img src={`${process.env.PUBLIC_URL}/img/human_right(banner).jpg`} alt="학생인권조례 페지 논란" />
                    </div>
                    <div className="item-info">
                        <div className="item-title">학생인권조례 폐지 논란</div>
                        <span className="item-date">2023/03/18</span>
                        <span className="item-cartegory">인권</span>
                    </div>
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                
            </div>
        </div>
    );
}

export default BoardGrid