//components
import RspHeader from '../components/RspHeader.js';
import Footer from '../components/Footer.js';
import Editor from '../components/Editor.js';

// containers
import StepsContainer from '../containers/StepContainer.js';

// pages
import EditStep1 from './EditStep1.js';
// import EditStep2 from './EditStep2.js';

// style
import '../css/RspEdit.css';

// react
import { useState } from 'react';

function RspEdit(){
    const [stage, setStage] = useState(0);
    const [formData, setFormData] = useState({
        title : "",
        content: "",
        summary: "",
        references : [],
        category: ""
    })
    
    return (
        <div className="container rsp-edit">
            <RspHeader />
            <div className='box header-padding'>
                {stage === 0 && <StepsContainer stage={stage} />}
                {stage === 0 && <EditStep1 setStage={setStage} formData={formData} setFormData={setFormData} />}
                {stage === 1 && <Editor style={{position: 'fixed', top: '100px'}} formData={formData} />}
            </div>
            {stage !== 1 && <Footer/>}
        </div>
    )
}

export default RspEdit;