// style
import '../css/EditStep1.css';

// antd
import { Button, Form, Input, Select, List, Drawer, Modal, Tooltip, message } from 'antd';
import React, { useState, useRef } from 'react';

// api
import api from '../commonJS/api.js';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const [urlValue, setUrlValue] = useState("");
    const [url, setUrl] = useState([]);
    const [form] = Form.useForm();
    const submitButton = useRef();

    const [isContinueModal, setIsContinueModal] = useState(false);

    const [messageApi, contextHolder] = message.useMessage();
    const waitSummaryAndNextStep = (time) => {
        messageApi.open({
        type: 'loading',
        content: '뉴스를 요약하는 중입니다...',
        duration: 0,
        });
        // Dismiss manually and asynchronously
        setTimeout(messageApi.destroy, time);
        setTimeout(()=>{
            props.setStage(1);
        }, time)

    };

    // 요약 완료 시 실행 함수
    const onFinish = (values) => {
        values.content = values.content.replace(/\"/gi, "\'")
        values.references = url;
        api.requestSummaryContent(values).then((data)=>{
            props.setFormData({
                ...props.formData,
                title: data.data.original.title,
                summary: data.data.summary,
                content: data.data.original.content,
                references: data.data.references,
                category: values.category
            })
            waitSummaryAndNextStep(2000);
        })
        
    };

    // 가이드라인 드로워 스테이트 && 함수
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
    };

    return (
        <section className="edit-step-box edit-step-1">
            {contextHolder}
            {/* 가이드라인 드로워 */}
            <Drawer title="아코레터의 뉴스 기사 요약 서비스란?" placement="right" onClose={onClose} width={"50vw"} open={open}>
                <p><b>글쓰기 가이드라인 (지켜야할 사항)</b></p>
                <p>1. 카드 뉴스를 제작하기 위한 기사를 작성해주세요.</p>
                <p>2. 작성란에 2000자를 넘으면 요약 시 2000자 이후 내용이 생략됩니다.</p>
                <p>3. 글 작성에 사용된 자료의 출처를 출처란에 URL 형식으로 적어주세요.</p>
            </Drawer>

            <h2><Tooltip title="요약 서비스에 대해 자세히 알고싶으시면 클릭해보세요!" open={true}>
                <a href="#" className='guideline-link' onClick={(e)=>{
                e.preventDefault();
                setOpen(true);    
            }}>뉴스 기사 요약 서비스란?</a></Tooltip></h2>
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
                    <Button ref={submitButton} type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                        요약하기
                    </Button>

                    <Button onClick={()=>{
                        setIsContinueModal(true);
                    }} type="default">
                        뒤로가기
                    </Button>
                </Form.Item>
            </Form>

            <Modal title="주의" open={isContinueModal}
                onOk={()=>{
                    navigate('/');
                }}
                onCancel={()=>{
                    setIsContinueModal(false);
                }}
            >
                    <p>기록했던 모든 정보는 저장되지 않습니다. 뒤로 가시겠습니까?</p>
            </Modal>
        </section>
    )
}

export default EditStep1;