/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Root from "./Components/Root";

function App() {
  return (
    <div 
      className="App"
      css={css`
        width: 90vw;
        height: 90vh;
        margin: 5vh auto;
        border: 1vw solid black;
        padding: 4vh 4vw;
        font-size: 2vw;
        font-weight: 900;
        box-sizing: border-box;
      `}>
        <Root></Root>
    </div>
  );
}

export default App;
