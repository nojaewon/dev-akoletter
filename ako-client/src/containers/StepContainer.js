import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';


function StepsContainer({stage}){

    const stepsReturn = (stage) => {
        const steps = ['wait', 'wait', 'wait', 'wait'];
        
        for(let i=0; i<stage; i++){
            steps[i] = 'finish';
        }

        steps[stage] = 'process'

        return steps
    };
    

    return (
        <div className='steps-container' style={{paddingTop: '20px'}}>
            <Steps
                direction={"vertical"}
                size='large'
                items={ [
                    {
                        title: '뉴스 요약 서비스',
                        status: stepsReturn(stage)[0],
                        description: "내가 첨부한 기사 또는 뉴스를 요약해줍니다.",
                        icon: <UserOutlined />,
                    },
                    {
                        title: '카스 뉴스 템플릿',
                        status: stepsReturn(stage)[1],
                        description: '원하는 템플릿을 요약된 기사와 함께 정리하세요!',
                        icon: <SolutionOutlined />,
                    },
                    {
                        title: '카드 뉴스 Editor',
                        status: stepsReturn(stage)[2],
                        description: '나만의 카드뉴스를 위한 여러가지 편집 기능',
                        icon: <LoadingOutlined />,
                    },
                    {
                        title: '등록 또는 발송',
                        status: stepsReturn(stage)[3],
                        description: '게시물로 등록 또는 팔로워에게 발송',
                        icon: <SmileOutlined />,
                    },
                ]}
            />
            <h2 style={{color: 'red', fontSize: '20px', margin: '20px 0'}}>주의사항!</h2>
            <ol style={{color: 'red', lineHeight: '25px'}}>
                <li>1. 요약 원문의 수가 2000자 이상인 경우 요약이 원할합니다.</li>
                <li>2. 이모티콘 및 특수문자의 사용은 자제해주세요 <br /> ex. %, △, •, 😂...</li>
                <li>3. 다른 사람의 글을 표절하면 안돼요!</li>
                <li>4. 나만의 카드뉴스를 만들어보세요~</li>
            </ol>
        </div>
    );
}
export default StepsContainer;