import axios from 'axios';

const LOCAL = true;
const URL = LOCAL ? "http://localhost:8080" : "https://dev-akoletter-api.herokuapp.com";

const api = {
    // 로그인 API
    requestLogin : async (id, pw)=>{
        const login_request_url = `${URL}/member/login`;
        let result;

        if(LOCAL){
            result = await axios.get(login_request_url)
                .then((response)=>{
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
        // 회원가입 API
        const signup_request_url = `${URL}/member/join`;

        let result;
        if(LOCAL){
            result = await axios.get(signup_request_url).then(res=>res.data);
        } else {
            result = await axios.post(signup_request_url, formData).then(res=>res.data);
        }
        
        return result;
    },

    requestSummaryContent: async (formData)=>{
        // 원문 요약 API
        const summary_request_url = `${URL}/editor/summary`;
        let result;
        if(LOCAL){
            result = await axios.get(summary_request_url).then(res=>res.data);
        } else {
            result = await axios.post(summary_request_url, formData).then(res=>res.data);
        }
        return result;
    },

    getPostList: async()=>{
        const postlist_request_url = `${URL}/post/postlist`;
        const result = await axios.get(postlist_request_url).then(res=>res.data);
        return result;
    },

    getPostDetail: async(id)=>{
        const postdetail_request_url = `${URL}/post/postdetail/${id}`;
        let result;
        if(LOCAL){
            result = await axios.get(postdetail_request_url).then(res=>res.data);
        } else {
            result = await axios.post(postdetail_request_url, {"id": id}).then(res=>res.data);
        }

        return result;
    }
};




export default api;