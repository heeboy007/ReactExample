import React, { Fragment } from "react";

function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16 //단위를 생략하는 pxㄹ 지정됩니다.
  };
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
      <p>아래는 삼항연산자</p>
      {name === '리액트' ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
      <p>아래는 AND 연산자</p>
      {name === '리액트' && <h1>리액트입니다.</h1>}
      <div style={style}>
        스타일이 적용된! {name}
      </div>
    </div>
  );
}

export default App;
