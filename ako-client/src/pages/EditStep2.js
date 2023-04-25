// style
import '../css/EditStep2.css';

// antd
import { Slider, InputNumber, Col, Row, Tooltip } from 'antd';

// react
import { useEffect, useState } from 'react';

// containers
import TabsContainer from '../containers/TabsContainer.js';

// common JS
import App from '../commonJS/konva.js';

function EditStep2({summary, title, content}){
    const [inputValue, setInputValue] = useState(100);
    const onChange = (newValue) => {
        setInputValue(newValue);
    };

    useEffect(()=>{
        new App();
    }, [])

    return (
        <section className="edit-step-box edit-step-2">
            <TabsContainer summary={summary} title={title} content={content} />
            <div className='scene'>
                <div className='layer-controller'>
                    {/* 레이어 복사, 추가, 삭제, 레이어 간 이동 */}
                    <span className='page-order'>페이지 1</span>
                    <button className='btn'><span className="material-symbols-outlined">
                        arrow_back
                    </span></button>                
                    <button className='btn'><span className="material-symbols-outlined">
                        arrow_forward
                    </span></button>                
                    <button className='btn'><span className="material-symbols-outlined">
                        add
                    </span></button>                
                    <button className='btn'><span className="material-symbols-outlined">
                        content_copy
                    </span></button>                
                    <button className='btn'><span className="material-symbols-outlined">
                        delete
                    </span></button>                
                </div>
                <div className='layer-container'>
                    {/* 레이어 컨테이너 */}
                    <div className='layer'></div>
                </div>
                <button className='layer-add-button'>+ 페이지 추가</button>
                <div className='layer-viewer'>
                <Row>
                    <Col span={16}>
                        
                        <Slider
                            min={25}
                            max={200}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                            onChange={onChange}
                            tooltip={{
                                open: false
                            }}
                        /> 
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={25}
                            max={200}
                            step={10}
                            formatter={(value)=>`${value}%`}
                            parser={(value)=>value.replace("%", "")}
                            style={{
                                margin: '0 16px',
                            }}
                            value={inputValue}  
                            onChange={onChange}
                        />
                    </Col>
                </Row>
                
                </div>
            </div>
        </section>
    )
}

export default EditStep2;