// style
import '../css/RspIndex.css';

// components
import RspHeader from "../components/RspHeader.js";
import RspLoginBanner from '../components/RspLoginBanner.js';
import RspGridBoard from '../components/RspGridBoard.js';
import Footer from '../components/Footer.js';
import EditLink from '../components/EditLink.js';

function RspMain(){

    return (
        <div className="container">
            <RspHeader />
            <RspLoginBanner />
            <RspGridBoard />
            <Footer />
            <EditLink />
        </div>
    )
}

export default RspMain;