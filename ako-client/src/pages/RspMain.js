import '../css/RspIndex.css';

import RspHeader from "../components/RspHeader.js";
import RspLoginBanner from '../components/RspLoginBanner.js';
import RspGridBoard from '../components/RspGridBoard.js';


import Footer from '../components/Footer.js';

function RspMain(){
    return (
        <div className="container">
            <RspHeader />
            <RspLoginBanner />
            <RspGridBoard />
            <Footer />
        </div>
    )
}

export default RspMain;