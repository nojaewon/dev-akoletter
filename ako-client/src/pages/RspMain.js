// style
import '../css/RspIndex.css';

// react
import { useSelector } from 'react-redux';

// components
import RspHeader from "../components/RspHeader.js";
import RspLoginBanner from '../components/RspLoginBanner.js';
import RspGridBoard from '../components/RspGridBoard.js';
import Footer from '../components/Footer.js';
import EditLink from '../components/EditLink.js';

function RspMain(){
    const { usrNm } = useSelector(state => ({
        usrNm: state.login.usrNm
    }));

    return (
        <div className="container">
            <RspHeader />
            { !usrNm && <RspLoginBanner />}
            <RspGridBoard />
            <Footer />
            <EditLink />
        </div>
    )
}

export default RspMain;