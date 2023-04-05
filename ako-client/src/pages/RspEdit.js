//components
import RspHeader from '../components/RspHeader.js';
import Footer from '../components/Footer.js';

// containers
import BreadcrumbContainr from '../containers/BreadCrumb.js';

// pages
import EditStep1 from './EditStep1.js';

const editSteps=[
    {
        title: '뉴스 기사 요약',
    },
    {
        title: '카드 뉴스 생성'
    },
    {
        title: '카드 뉴스 템플릿'
    }
]

function RspEdit(){

    return (
        <div className="container">
            <RspHeader />
            <BreadcrumbContainr links={editSteps} />
            <EditStep1 />
            <Footer />
        </div>
    )
}

export default RspEdit;