import React from 'react';
import './App.css';
import { Route, Routes, Navigate, Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home..
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><NavLink to="/topics/1">HTML</NavLink></li>
        <li><NavLink to="/topics/2">CSS</NavLink></li>
        <li><NavLink to="/topics/3">React</NavLink></li>
      </ul>
      <Routes>
        <Route exact path="/topics/1" Component={<div>
          HTML is...
        </div>} />
        <Route exact path="/topics/2" Component={<div>
          CSS is...
        </div>} />
        <Route exact path="/topics/3" Component={<div>
          React is...
        </div>} />
      </Routes>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact..
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/topics/*" Component={Topics} />
        <Route path="/contact" Component={Contact} />
        <Route path="/404" element={<div>Choose the correct path</div>} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
