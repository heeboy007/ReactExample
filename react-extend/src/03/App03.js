import React, { Component } from "react";
import PropTypes from 'prop-types';
import './App03.css';
import './src/MyComponent'
import MyComponent from "./src/MyComponent";

class App03 extends Component {
  static defaultProps = {
    name: "React",
    favoriteNumber: 3
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
  render() {
    const { name, favoriteNumber } = this.props;
    return (
      <div>
        <p>Current Name : {name}</p>
        <p>Favorite Number : {favoriteNumber}</p>
        <MyComponent></MyComponent>
      </div>
    );
  }
}

/*
function으로 만들어진 함수의 this는 자신이 포함된 객체를 가리킨다.

function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이';
    bark: function() {
      console.log(this.name + ': 멍멍!');
    }
  }
}

const blackDog = new BlackDog();
blackDog.bark(); -> 검둥이 : 멍멍

json 객체가 상위 객체로 있기 때문이다.

화살표 함수의 경우는 이렇다 : 

function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이';
    bark: () => {
      console.log(this.name + ': 멍멍!');
    }
  }
}

const whiteDog = new WhiteDog();
whiteDog.bark(); -> 흰둥이 : 멍멍

new로 생성된 최상위의 *인스턴스*를 this로써 가리키기 때문이다.
*/

export default App03;
