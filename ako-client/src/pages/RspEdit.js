//components
import RspHeader from '../components/RspHeader.js';
import Footer from '../components/Footer.js';

// containers
import StepsContainer from '../containers/StepContainer.js';

// pages
import EditStep1 from './EditStep1.js';
import EditStep2 from './EditStep2.js';

// style
import '../css/RspEdit.css';

// react
import { useState } from 'react';

function RspEdit(){
    const [stage, setStage] = useState(0);

    return (
        <div className="container rsp-edit">
            <RspHeader />
            <div className='box header-padding'>
                <StepsContainer stage={stage} />
                {stage === 0 && <EditStep1 setStage={setStage} />}
                {stage === 1 && <EditStep2 setStage={setStage} />}
            </div>
            <Footer />
        </div>
    )
}

export default RspEdit;