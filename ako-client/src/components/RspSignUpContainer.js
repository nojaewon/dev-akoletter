//react
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// style
import '../css/RspSignUpContainer.css'

// import commonJS module
import api from '../commonJS/api.js';

// antd design
import {
    Modal,
    Button,
    Checkbox,
    Form,
    Input,
    Select,
    Drawer
} from 'antd';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
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

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

// API 명세에 따른 폼 name value 설정
const USRFORM = {
    id: "usrId",
    pw: "usrPwd",
    email: 'usrEmail',
    name: 'usrNm',
    tel: 'usrTelNo',
    nickname: 'usrNickName'
}

function RspSignUpContainer(){
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const [isContinueModal, setIsContinueModal] = useState(false);
    const [open, setOpen] = useState(false);
    
    // 드로워 실행/종료 함수
    const onClose = () => {
        setOpen(false);
    };
    
    // 폼 제출 시 실행 함수
    const onFinish = (values) => {
        api.requestSignUp(values).then((data)=>{
            if(data.state === 200){
                console.log(data.message);
                navigate('/');
            } else if (data.state === 400){
                console.log(data.message);
            }
        });
    };

    // 전화번호 
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{ width: 70,}}
            >
                <Option value="82">+82</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div className='sign-container header-padding'>
            {/* 이용 약관 드로워 */}
            <Drawer title="개인정보 수집&middot;이용 동의" placement="right" onClose={onClose} width={"50vw"} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>

            <h2>회원가입</h2>
            <Form
                {...formItemLayout}
                form={form}
                onFinish={onFinish}
                initialValues={{
                    prefix: '82',
                }}
                style={{maxWidth: 600,}}
                scrollToFirstError
            >
                <Form.Item
                    name={USRFORM.id}
                    label="아이디"
                    rules={[
                    {
                        type: 'id',
                        message: '유효한 아이디가 아닙니다!',
                    },
                    {
                        required: true,
                        message: '아이디를 입력해주세요!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={USRFORM.email}
                    label="이메일"
                    rules={[
                    {
                        type: 'email',
                        message: '유효한 이메일이 아닙니다!',
                    },
                    {
                        required: true,
                        message: '이메일을 입력해주세요!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={USRFORM.pw}
                    label="비밀번호"
                    rules={[
                    {
                        required: true,
                        message: '비밀번호를 입력해주세요!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="비밀번호 확인"
                    dependencies={[USRFORM.pw]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '비밀번호를 확인해주세요!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue(USRFORM.pw) === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('비밀번호가 일치하지 않습니다!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name={USRFORM.nickname}
                    label="닉네임"
                    tooltip="다른 사람들이 당신을 어떤 이름으로 불렀으면 하나요?"
                    rules={[
                        {
                            required: false,
                            message: '당신의 닉네임을 설정해주세요!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={USRFORM.name}
                    label="이름"
                    tooltip="당신의 이름을 입력해주세요!"
                    rules={[
                        {
                            required: false,
                            message: '당신의 이름을 입력해주세요!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={USRFORM.tel}
                    label="핸드폰 번호"
                    rules={[
                        {
                            required: true,
                            message: '핸드폰 번호를 입력해주세요!',
                        },
                    ]}
                >
                    <Input
                    addonBefore={prefixSelector}
                    style={{ width: '100%',}}
                    />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('해당 항목을 동의해주세요')),
                    },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                    위 개인정보의 <a href="#" style={{fontWeight: "bold"}} onClick={(e)=>{
                        e.preventDefault();
                        setOpen(true);
                    }}>수집&middot;이용 약관 </a>에 동의합니다. 
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" style={{width: 100}} >계정 만들기</Button>
                    <Button type="default" style={{marginLeft: 30, width: 100}} onClick={()=>{
                        setIsContinueModal(true);
                    }}>뒤로 가기</Button>
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
        </div>
       
    );
}

export default RspSignUpContainer;