import React, { Fragment } from "react";

function App() {
  const name = '리액트';
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
      <p>아래는 삼항연산자</p>
      {name === '리액트' ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
      <p>아래는 AND 연산자</p>
      {name === '리액트' && <h1>리액트입니다.</h1>}
    </>
  );
}

export default App;
