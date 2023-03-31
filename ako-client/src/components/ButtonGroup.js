import '../css/ButtonGroup.css';

import {useEffect, useRef} from 'react';

const BTN_WIDTH = 75;

function ButtonGroup(props){
    const targetList = props.target;
    const btnGroup = useRef();

    useEffect(()=>{
        // 버튼 그룹의 width 계산/적용
        const btnGRoupWidth = `${targetList.length * BTN_WIDTH}px`;

        btnGroup.current.style.width = btnGRoupWidth;
    }, []);

    const buttons = targetList.map((btn_title, idx)=>
        <button key={idx} className='b'>{btn_title}</button>
    )
    
    return (
        <div className="btn-group-container">
            <div ref={btnGroup} className="btn-group">
                {buttons}
            </div>
        </div>

    );
}

export default ButtonGroup;