import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <input type="button" value="remove func" onClick={
        function() {
          setFuncShow(false);
        }
      }></input>
      <input type="button" value="remove class" onClick={
        function() {
          setClassShow(false);
        }
      }></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

var funcStyle = 'color:blue';
var funcId = 0;
function FuncComp(props) {
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];
  //console.log('numberstate', numberState);

  /*useEffect(function(){
    console.log('%cfunc => useEffect B (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
    document.title = number + ':' + _date;
  });*/

  //var dateState = useState((new Date()).toString());
  //var _date = dateState[0];
  //var setDate = dateState[1];

  var [_date, setDate] = useState((new Date()).toString());

  useEffect(function(){
    console.log('%cfunc => useEffect (componentDidMount)'+(++funcId), funcStyle);
    document.title = _date;
    return function() {
      console.log('%cfunc => useEffect return (componentDidMount)'+(++funcId), funcStyle);
    }
  }, []);

  useEffect(function(){
    console.log('%cfunc => useEffect _date (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
    document.title = _date;
    return function() {
      console.log('%cfunc => useEffect _date return (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
    }
  }, [_date]);

  useEffect(function(){
    console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
    document.title = number;
    return function() {
      console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
    }
  }, [number]);

  console.log('%cfunc => render'+(++funcId), funcStyle);
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

var classStyle = 'color:red';
class ClassComp extends React.Component{
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }

  //deprecated after react 17
  //componentWillMount(){
  //  console.log('%cclass => componentWillMount', classStyle);
  //}

  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle);
  }

  shouldComponentUpdate(){
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }

  //deprecated after react 17
  //componentWillUpdate(){
  //  console.log('%cclass => componentWillUpdate', classStyle);
  //}

  componentDidUpdate(){
    console.log('%cclass => componentDidUpdate', classStyle);
  }

  render(){
    console.log('%cclass => render', classStyle);
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
