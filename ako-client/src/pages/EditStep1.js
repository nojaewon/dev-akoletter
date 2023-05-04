// style
import '../css/EditStep1.css';

// antd
import { Button, Form, Input, Select, List, Drawer } from 'antd';
import React, { useState, useRef } from 'react';

// api
import api from '../commonJS/api.js';

const layout = {
    labelCol: {
        xs: {
        span: 16,
        },
        sm: {
        span: 4,
        },
    },
    wrapperCol: {
        xs: {
        span: 24,
        },
        sm: {
        span: 16,
        },
    },
};

const validateMessages = {
    required: '${label} is required!',
};

function EditStep1(props){
    const [urlValue, setUrlValue] = useState("");
    const [url, setUrl] = useState([]);
    const [form] = Form.useForm();
    const submitButton = useRef();

    // 요약 완료 시 실행 함수
    const onFinish = (values) => {

        values.url = url;
        api.requestSummaryContent(values).then((data)=>{
            console.log(data.data);
            props.setScript[0](data.data.summary);
            props.setScript[1](data.data.original.title);
            props.setScript[2](data.data.original.content);
        })
        props.setStage(1);
        
    };

    // 가이드라인 드로워 스테이트 && 함수
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
    };

    return (
        <section className="edit-step-box edit-step-1">
            {/* 가이드라인 드로워 */}
            <Drawer title="아코레터의 뉴스 기사 요약 서비스란?" placement="right" onClose={onClose} width={"50vw"} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>

            <h2><a href="#" className='guideline-link' onClick={(e)=>{
                e.preventDefault();
                setOpen(true);    
            }}>뉴스 기사 요약 서비스란?</a></h2>
            <Form
                {...layout}
                    onFinish={onFinish}
                    onKeyDown={(e)=>{
                        if(e.key === 'Enter'){
                            submitButton.current.click();
                        }
                    }}
                    form={form}
                    fields={[{name: 'references', value: urlValue}]}
                    style={{maxWidth: 900,}}
                    validateMessages={validateMessages}
            >
                <Form.Item
                    name="title"
                    label="제목"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item 
                    name="content"
                    label="뉴스"
                    rules={[
                        {
                            required: true,
                        }
                    ]}
                >
                    <Input.TextArea rows={8}/>
                </Form.Item>

                <Form.Item 
                    label="카테고리"
                    name="category"
                    rules={[
                        {
                            required: true,
                        }
                    ]}
                >
                    <Select style={{width:150}}>
                        <Select.Option value="1">정치</Select.Option>
                        <Select.Option value="2">경제</Select.Option>
                        <Select.Option value="3">세계</Select.Option>
                        <Select.Option value="4">테크</Select.Option>
                        <Select.Option value="5">노동</Select.Option>
                        <Select.Option value="6">환경</Select.Option>
                        <Select.Option value="7">인권</Select.Option>
                        <Select.Option value="8">문화</Select.Option>
                        <Select.Option value="9">라이프</Select.Option>
                    </Select>
                </Form.Item>
                
                <Form.Item label="URL" style={{ marginBottom: 0 }}>
                    <Form.Item
                        name="references"
                        style={{display:'inline-block', width: 'calc(60% - 8px)'}}
                    >
                        <Input value={urlValue} onChange={(e)=>{
                            setUrlValue(e.target.value);
                        }}/>
                    </Form.Item>

                    <Form.Item
                        style={{display:'inline-block', width: 100, margin: '0 8px'}}
                    >
                    <Button type="default" onClick={()=>{
                        setUrl([...url, urlValue]);
                        setUrlValue("");
                        form.setFieldValue("references", "");
                    }}>Submit</Button>
                    </Form.Item>
                </Form.Item>

                <Form.Item
                    label="URL 목록"
                    wrapperCol={{...layout.wrapperCol}}
                >
                    <List
                        size="small"
                        bordered
                        dataSource={url}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 16,
                            offset: 4,
                        },
                        }}
                >
                    <Button ref={submitButton} type="primary" htmlType="submit">
                        요약하기
                    </Button>
                </Form.Item>
            </Form>
            
        </section>
    )
}

export default EditStep1;