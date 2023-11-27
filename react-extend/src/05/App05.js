import React, { Component } from "react";
import './App05.css';
import ValidateSample from "./src/ValidateSample";
import RefSample from "./src/RefSample";

class App05 extends Component {
    render() {
        return (
            <div>
                <ValidateSample></ValidateSample>
                <RefSample></RefSample>
            </div>
        );
    }
}

export default App05;
