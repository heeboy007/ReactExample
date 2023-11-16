import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, HashRouter } from 'react-router-dom';

//웹 서버 설정에 따라, 어떤 패스로 들어오든 루트 페이지에 있는 HTML을 서비스할 수 있을 경우 Browser,
//아니면 HashRouter를 쓰면 된다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter><App /></HashRouter>
);

