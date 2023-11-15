import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props) {
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];
  console.log('numberstate', numberState);

  var dateState = useState((new Date()).toString());
  var _date = dateState[0];
  var setDate = dateState[1];

  return(
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={function(){
        setNumber(Math.random());
      }.bind(this)}></input>
      <input type="button" value="date" onClick={function(){
        setDate((new Date()).toString());
      }.bind(this)}></input>
    </div>
  );
}

class ClassComp extends React.Component{
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }

  render(){
    return(
      <div className='container'>
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type='button' value="random" onClick={function(){
          this.setState({number: Math.random()});
        }.bind(this)}></input>
        <input type='button' value="date" onClick={function(){
          var newDate = (new Date()).toString();
          this.setState({date: newDate});
        }.bind(this)}></input>
      </div>
    );
  }
}

export default App;
