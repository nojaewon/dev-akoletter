// react
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

// antd design
import { Tooltip } from "antd";

// style
import '../css/EditLink.css';

function EditLink(){
    const { usrNm } = useSelector(state => ({
        usrNm: state.login.usrNm
    }));

    return (
        <div className={usrNm && "edit-start"}>
            {
                usrNm == null ?
                "":
                <Tooltip
                title="카드뉴스 만들기"
            >
                <Link to="/edit">
                    <span className="material-symbols-outlined">new_window</span>
                </Link>
            </Tooltip>
            }
        </div>
       
    );
}

export default EditLink;