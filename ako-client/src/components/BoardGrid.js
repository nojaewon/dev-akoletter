import {Button, ButtonGroup} from '@mui/material'

const cartegory = ['정치', '시사', '환경', '연예', '인권', '여행']

function BoardGrid(){
    const BUTTONS = cartegory.map((el)=>
            <Button>{el}</Button>
        )
    
    return (
        <div class="board-container">
            <div class="board-controller-container">
                <div class="board-controller">
                    <ButtonGroup size='large' fullWidth='true' variant="text" aria-label="text button group">
                        {BUTTONS}
                    </ButtonGroup>
                </div>
            </div>
            <button class="more pen-font">더 보기</button>
            <div class="board">
                <div class="item">
                    <div class="item-banner">
                        <img src={`${process.env.PUBLIC_URL}/img/human_right(banner).jpg`} alt="학생인권조례 페지 논란" />
                    </div>
                    <div class="item-info">
                        <div class="item-title">학생인권조례 폐지 논란</div>
                        <span class="item-date">2023/03/18</span>
                        <span class="item-cartegory">인권</span>
                    </div>
                </div>
                <div class="item"></div>
                <div class="item">
                    <div class="item-banner">
                        <img src={`${process.env.PUBLIC_URL}/img/human_right(banner).jpg`} alt="학생인권조례 페지 논란" />
                    </div>
                    <div class="item-info">
                        <div class="item-title">학생인권조례 폐지 논란</div>
                        <span class="item-date">2023/03/18</span>
                        <span class="item-cartegory">인권</span>
                    </div>
                </div>
                <div class="item"></div>
                <div class="item">
                    <div class="item-banner">
                        <img src={`${process.env.PUBLIC_URL}/img/human_right(banner).jpg`} alt="학생인권조례 페지 논란" />
                    </div>
                    <div class="item-info">
                        <div class="item-title">학생인권조례 폐지 논란</div>
                        <span class="item-date">2023/03/18</span>
                        <span class="item-cartegory">인권</span>
                    </div>
                </div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                
            </div>
        </div>
    );
}

export default BoardGrid