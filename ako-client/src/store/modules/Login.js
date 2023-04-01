/* 액션 타입 만들기 */
const LOGIN = 'login/LOGIN';


/* 액션 생성함수 만들기 */
export const setLogin = () => ({ type: LOGIN });

/* 초기 상태 선언 */
const initialState = {
  data: {
          "usrId": "",
          "usrNm": "",
          "usrEmail": "",
          "usrTelNo": "",
          "roles": [],
          "token": null
      },
};

/* 리듀서 선언 */
export default function counter(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
      };

    default:
      return state;
  }
}