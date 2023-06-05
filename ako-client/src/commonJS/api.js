import axios from 'axios';

const useJSONServer = true; // 서버를 임의의 Json-server로 사용할 시 true 아닐 시 false

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
        const postlist_request_url = `/getpostlist?category=${category}?size=${size}`;
        const result = await axios.get(postlist_request_url, {
            "accessToken" : "dummy"
        }).then(res=>res.data);
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
    }
};




export default api;