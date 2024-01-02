import DisplayNum from "../Components/DisplayNum";
import store from "../store";
import { useState } from "react";

function DisplayNumber() {
    const [ number, setNumber ] = useState(0);
    store.subscribe(() => {
        setNumber(store.getState().number);
    });
    return (
        <DisplayNum number={number}></DisplayNum>
    );
}

export default DisplayNumber;