/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function DisplayNum() {
    return (
        <div
            css={css`
            width: 100%;
            height: 80%;
            border: 1vw solid black;
            padding: 2%;
            font-size: 2vw;
            font-weight: 900;
            box-sizing: border-box;
        `}>
            Display Number
        </div>
    );
}

export default DisplayNum;