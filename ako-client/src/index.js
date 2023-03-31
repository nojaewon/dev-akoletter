import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 페이지 가져오기
import RspMain from './pages/RspMain.js';
import RspBoard from './pages/RspBoard.js';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <RspMain />
  },
  {
    path: '/detail',
    element: <RspBoard />
  }
])

// react.stricMode를 쓰면 렌더링이 2번씩 됨
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
