//components
import RspHeader from '../components/RspHeader.js';
import Footer from '../components/Footer.js';

// containers
import StepsContainer from '../containers/StepContainer.js';

// pages
import EditStep1 from './EditStep1.js';

// style
import '../css/RspEdit.css';


function RspEdit(){

    return (
        <div className="container rsp-edit">
            <RspHeader />
            <div className='box header-padding'>
                <StepsContainer />
                <EditStep1 />
            </div>
            <Footer />
        </div>
    )
}

export default RspEdit;