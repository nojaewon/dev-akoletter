/* 액션 타입 만들기 */
const LOGIN = 'login/LOGIN';


/* 액션 생성함수 만들기 */
export const setLogin = (token, usrId, usrNm) => ({ 
    type: LOGIN,
    token,
    usrId,
    usrNm 
 });

/* 초기 상태 선언 */
const initialState = {
    token: null,
    usrId: null,
    usrNm: null,
};

/* 리듀서 선언 */
export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.token,
        usrId: action.usrId,
        usrNm: action.usrNm
      };

    default:
      return state;
  }
}