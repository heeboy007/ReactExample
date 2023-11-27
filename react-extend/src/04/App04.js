import React, { Component } from "react";
import './App04.css';
import EventPractice from "./src/EventPractice";
import EventPracticeFunc from "./src/EventPracticeFunc";

class App04 extends Component {
    render() {
        return (
            <div>
                <EventPractice></EventPractice>
                <EventPracticeFunc></EventPracticeFunc>
            </div>
        );
    }
}

export default App04;
