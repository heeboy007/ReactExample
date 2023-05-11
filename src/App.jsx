import React, { Component } from 'react';
import TOC from './components/TOC.jsx';
import Subject from './components/Subject.jsx';
import Content from './components/Content.jsx';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject: {title:'WEB', sub:'World Wide Web!'}
    }
  }
  
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;