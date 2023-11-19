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

var contents = [
  {id:1, title:'HTML', description:'HTML is...'},
  {id:2, title:'CSS', description:'CSS is...'},
  {id:3, title:'REACT', description:'React is...'},
];

function Topics() {
  var lis = [];
  for (var i = 0; i < contents.length; i++){
    lis.push(
      <li key={"" + contents[i].id}><NavLink to={"" + contents[i].id}>{contents[i].title}</NavLink></li>
    );
  }
  //relative nested route
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
        <Route path="1" element={<div>
          HTML is...
        </div>} />
        <Route path="2" element={<div>
          CSS is...
        </div>} />
        <Route path="3" element={<div>
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
