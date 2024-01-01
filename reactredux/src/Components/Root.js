/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

import AddNumRoot from "./AddNumRoot";
import DisplayNumRoot from "./DisplayNumRoot";

function Root() {
    const [ number, setNumber ] = useState(0);

    return (
        <div
            css={css`
            width: 100%;
            height: 100%;
            border: 1vw solid black;
            padding: 2%;
            font-size: 2vw;
            font-weight: 900;
            box-sizing: border-box;
        `}>
            Root
            <AddNumRoot onClick={(size) => {
                setNumber(size + number);
            }}></AddNumRoot>
            <DisplayNumRoot number={number}></DisplayNumRoot>
        </div>
    );
}

export default Root;