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

// antd
import {message} from 'antd';

function RspMain(){
    const { usrNm } = useSelector(state => ({
        usrNm: state.login.usrNm
    }));
    const [messageApi, contextHolder] = message.useMessage();
    const showMessage = (msg, type) => {
        messageApi.open({
            type: type,
            content: msg,
          });
    };

    return (
        <div className="container">
            {contextHolder}
            <RspHeader />
            { !usrNm && <RspLoginBanner showMessage={showMessage} />}
            <RspGridBoard />
            <Footer />
            <EditLink />
        </div>
    )
}

export default RspMain;