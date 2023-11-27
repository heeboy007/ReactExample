import React from "react";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

//각 챕터 별 소스앱 임포트
import App02 from './02/App02';
import App03 from './03/App03';
import App04 from './04/App04';

function BaseLinks() {
  return (
    <div>
      <ul>
        <li><Link to="/02">Chapter 02</Link></li>
        <li><Link to="/03">Chapter 03</Link></li>
        <li><Link to="/04">Chapter 04</Link></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={BaseLinks}></Route>
      <Route path="/02" Component={App02}></Route>
      <Route path="/03" Component={App03}></Route>
      <Route path="/04" Component={App04}></Route>
    </Routes>
  );
}

export default App;
