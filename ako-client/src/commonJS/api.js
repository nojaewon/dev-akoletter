import axios from 'axios';

const useJSONServer = false; // 서버를 임의의 Json-server로 사용할 시 true 아닐 시 false
const LOCAL = false;
const URL = LOCAL ? "http://localhost:8080" : "https://akoletter-api.azurewebsites.net";

const api = {
    // 로그인 API
    requestLogin : async (id, pw)=>{
        const login_request_url = `/member/login`;
        let result;

        if(useJSONServer){
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
            result = await axios.post(login_request_url, {
                "usrId": id,
                "usrPwd": pw
             })
                .then((response)=>{
                    const data = response.data;
        
                    return {
                        msg: data.message,
                        usrNm : data.data.usrNm,
                        usrId : data.data.usrId,
                        token : data.data.token
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
        const signup_request_url = `/member/join`;

        let result;
        if(useJSONServer){
            result = await axios.get(signup_request_url).then(res=>res.data);
        } else {
            result = await axios.post(signup_request_url, formData).then(res=>res.data);
        }
        
        return result;
    },

    requestSummaryContent: async (formData)=>{
        // 원문 요약 API
        const summary_request_url = `/editor/summary`;
        let result;
        if(useJSONServer){
            result = await axios.get(summary_request_url).then(res=>res.data);
        } else {
            result = await axios.post(summary_request_url, formData).then(res=>res.data);
        }
        return result;
    },

    getPostList: async(category, size)=>{
        const postlist_request_url = `/getpostlist?category=${category}&size=${size}`;
        const result = await axios.get(postlist_request_url).then(res=>res.data);
        return result;
    },

    getPostDetail: async(id)=>{
        const postdetail_request_url = `/getpost/${id}`;
        const result = await axios.get(postdetail_request_url).then(res=>res.data);

        return result;
    },

    requestSavePost: async(formData)=>{
        const save_request_url = `/editor/savepost`;
        let result;
        if(useJSONServer){
            result = await axios.get(save_request_url).then(res=>res.data);
        } else {
            result = await axios.post(save_request_url, formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                  }
            }).then(res=>res.data);
        }

        return result
    },

    getBase64Image: async (fileId)=>{
        const request_data_url = `/images/${fileId}`;
        const result = await axios.get(request_data_url).then(res=>res.data.data.image)

        return result;
    },

    getLogOutRequest : async (token)=>{
        const logout_request_url = `/member/logout`;
        const result = await axios.post(logout_request_url, {
            "accessToken": token
        }, {
            headers: {
                'Authorization': token
              }
        }).then(res=>res.data);

        return result;
    },
    requestDeleteBoard: async (postId, usrId, token)=>{
        const deleteBoard_request_url = `/post/delete`;
        const result = await axios.post(deleteBoard_request_url, {
            "postId": parseInt(postId),
            "usrId": usrId
        },{
            headers: {
                "Authorization": token
              }
        }).then(res=>res.data);

        return result;
    }
};

export default api;