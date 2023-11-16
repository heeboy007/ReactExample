import React from 'react';
import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';

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
      Topics..
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
        <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/topics" Component={Topics} />
        <Route path="/contact" Component={Contact} />
        <Route path="/404" element={<div>Choose the correct path</div>} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
