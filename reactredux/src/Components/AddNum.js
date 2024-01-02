/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

import store from "../store";

function AddNum(props) {
    const [ size, setSize ] = useState(1);
    return (
        <div
            css={css`
            width: 100%;
            height: 80%;
            border: 1vw solid black;
            padding: 2%;
            box-sizing: border-box;
        `}>
            <h1 css={css`
                font-size: 2vw;
                font-weight: 900;
                padding: 0;
                margin: 0;
            `}>Add Number</h1>
            <input type="button" value="+" onClick={(e) => {
                store.dispatch({type: 'INCREMENT', size: size});
            }}></input>
            <input type="text" value={size} onChange={(e) => {
                setSize(Number(e.target.value));
            }}></input>
        </div>
    );
}

export default AddNum;