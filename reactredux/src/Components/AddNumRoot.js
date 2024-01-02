/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import AddNumber from "../Containers/AddNumber";

function AddNumRoot(props) {
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
            Add Number Root
            <AddNumber></AddNumber>
        </div>
    );
}

export default AddNumRoot;