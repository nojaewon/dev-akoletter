import axios from 'axios';

const URL = "http://localhost:4000";

const api = {
    // 로그인 api
    getLoginToken : async ()=>{
        const login_success_url = `${URL}/signup_success`;

        await axios.get(login_success_url)
            .then((response)=>{console.log(response)})
            .catch((err) => {console.log(err)})
        
        
    },


};

export default api;