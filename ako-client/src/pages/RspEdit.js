//components
import RspHeader from '../components/RspHeader.js';
import Footer from '../components/Footer.js';

// pages
import EditStep1 from './EditStep1.js';


function RspEdit(){

    return (
        <div className="container">
            <RspHeader />
            <EditStep1 />
            <Footer />
        </div>
    )
}

export default RspEdit;