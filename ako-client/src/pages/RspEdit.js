//components
import RspHeader from '../components/RspHeader.js';
import Footer from '../components/Footer.js';
import Editor from '../components/Editor.js';

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
    const [summary, setSummary] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    return (
        <div className="container rsp-edit">
            <RspHeader />
            <div className='box header-padding'>
                {stage === 0 && <StepsContainer stage={stage} />}
                {stage === 0 && <EditStep1 setStage={setStage} setScript={[setSummary, setTitle, setContent]} />}
                {/* {stage === 1 && <EditStep2 setStage={setStage} summary={summary} title={title} content={content}/>} */}
                {stage === 1 && <Editor />}

            </div>
            <Footer />
        </div>
    )
}

export default RspEdit;