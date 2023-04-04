import axios from 'axios';

const URL = "http://localhost:8080";

const api = {
    // 로그인 api
    // { usrId, usrPwd } => { OUTPUT }
    requestLogin : async (id, pw)=>{
        const login_success_url = `${URL}/member/login`;

        // json-server를 사용할 시에 axios.post로 요청을 보내면 db.json data를 잃는 이슈
        // const accToken = await axios.post(login_success_url, {
        const accToken = await axios.get(login_success_url, {
            "usrId": id,
            "usrPwd": pw
        })
            .then((response)=>{
                const data = response.data.data;

                return {
                    usrNm : data.usrNm,
                    usrId : data.usrId,
                    token : data.token
                }
            })
            .catch((err) => {
                console.log(err)
                return {
                    usrNm : null,
                    usrId : null,
                    token : null
                }
            })
        
        return accToken;
    },


};

export default api;