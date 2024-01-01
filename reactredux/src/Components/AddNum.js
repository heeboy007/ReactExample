/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


function AddNum() {
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
            <input type="button" value="+"></input>
            <input type="text" value="0"></input>
        </div>
    );
}

export default AddNum;