import axios from 'axios';

const LOCAL = true;
const URL = LOCAL ? "http://localhost:8080" : "https://dev-akoletter-api.herokuapp.com";

const api = {
    // 로그인 api
    // { usrId, usrPwd } => { OUTPUT }
    requestLogin : async (id, pw)=>{
        const login_request_url = `${URL}/member/login`;
        let result;

        if(LOCAL){
            result = await axios.get(login_request_url)
                .then((response)=>{
                    console.log(response)
                    const data = response.data.data;
        
                    return {
                        usrNm : data.usrNm,
                        usrId : data.usrId,
                        token : data.token
                    }
                })
        } else {
            result = await axios.axios.post(login_request_url, {
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
        }
        
        return result;
    },

    requestSignUp: async (formData)=>{
        // 회원가입 api
        const signup_request_url = `${URL}/member/join`;


        // json-server를 사용할 시에 axios.post로 요청을 보내면 db.json data를 잃는 이슈
        const result = await axios.post(signup_request_url, formData)
        // const result = await axios.get(signup_request_url, formData)
            .then((response)=>{
                return response.data
            })
        
        return result;
    },

    requestSummaryContent: async (formData)=>{
        // 원문 요약 api로 요약 정보 불러오기
        const summary_request_url = `${URL}/editor/summary`;
        // json-server를 사용할 시에 axios.post로 요청을 보내면 db.json data를 잃는 이슈
        const result = await axios.post(summary_request_url, formData)
        // const result = await axios.get(summary_request_url, formData)
            .then((response)=>{
                return response.data
            })
        
        return result;
    }


};



export default api;