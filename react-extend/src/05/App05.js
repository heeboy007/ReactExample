import React, { Component } from "react";
import './App05.css';
import ValidateSample from "./src/ValidateSample";
import RefSample from "./src/RefSample";
import ScrollBox from "./src/ScollBox";

class App05 extends Component {
    render() {
        return (
            <div>
                <ValidateSample></ValidateSample>
                <RefSample></RefSample>
                <ScrollBox ref={(ref) => this.scrollBox=ref}></ScrollBox>
                <button onClick={() => {
                    this.scrollBox.scrollToBottom();
                }}>
                    맨 밑으로
                </button>
            </div>
        );
    }
}

export default App05;
