/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function DisplayNum(props) {
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
            `}>Display Number</h1>
            <input type="text" value={props.number} readOnly></input>
        </div>
    );
}

export default DisplayNum;