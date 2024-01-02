/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import DisplayNumber from "../Containers/DisplayNumber";

function DisplayNumRoot() {
    return (
        <div
            css={css`
            width: 100%;
            height: 40%;
            margin: 5% auto;
            border: 1vw solid black;
            padding: 2%;
            font-size: 2vw;
            font-weight: 900;
            box-sizing: border-box;
        `}>
            Display Number Root
            <DisplayNumber></DisplayNumber>
        </div>
    );
}

export default DisplayNumRoot;