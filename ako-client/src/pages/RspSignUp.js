// components
import RspHeader from "../components/RspHeader.js";
import RspSignUpContainer from "../components/RspSignUpContainer.js";
import Footer from "../components/Footer.js";

function RspSignUp(){
    return (
        <div className="container">
            <RspHeader />
            <RspSignUpContainer />
            <Footer />
        </div>
    )
}

export default RspSignUp;