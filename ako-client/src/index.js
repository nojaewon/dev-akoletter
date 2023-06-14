import React from 'react';

// react-router-dom
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

// react-redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/index.js';

// react dev tools
import { composeWithDevTools } from '@redux-devtools/extension'


// 페이지 가져오기
import RspMain from './pages/RspMain.js';
import RspBoard from './pages/RspBoard.js';
import RspSignUp from './pages/RspSignUp.js';
import RspEdit from './pages/RspEdit.js';
import Page404 from './pages/404page.js';

import reportWebVitals from './reportWebVitals';

// 스토어 생성 및 출력
const store = createStore(rootReducer, composeWithDevTools());

// 리엑트 돔 생성 및 라우팅
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <RspMain />
  },
  {
    path: '/detail',
    element: <RspBoard />
  },
  {
    path: '/post/postdetail/:id',
    element: <RspBoard />
  },
  {
    path: '/signup',
    element: <RspSignUp />
  },
  {
    path: '/edit',
    element: <RspEdit />
  },
  {
    path: '*',
    element: <Page404 />
  }
])



// react.stricMode를 쓰면 렌더링이 2번씩 됨
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
