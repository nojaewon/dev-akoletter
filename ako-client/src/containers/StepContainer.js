import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';

function StepsContainer(){

    return (
        <div className='steps-container'>
            <Steps
                direction={"vertical"}
                size='large'
                items={[
                {
                    title: '뉴스 요약 서비스',
                    status: 'finish',
                    description: "내가 첨부한 기사 또는 뉴스를 요약해줍니다.",
                    icon: <UserOutlined />,
                },
                {
                    title: '카스 뉴스 템플릿',
                    status: 'finish',
                    description: '원하는 템플릿을 요약된 기사와 함께 정리하세요!',
                    icon: <SolutionOutlined />,
                },
                {
                    title: '카드 뉴스 Editor',
                    status: 'process',
                    description: '나만의 카드뉴스를 위한 여러가지 편집 기능',
                    icon: <LoadingOutlined />,
                },
                {
                    title: '등록 또는 발송',
                    status: 'wait',
                    description: '게시물로 등록 또는 팔로워에게 발송',
                    icon: <SmileOutlined />,
                },
                ]}
            />
        </div>
    );
}
export default StepsContainer;