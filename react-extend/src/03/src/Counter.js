import React, { Component } from "react";

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const { number, fixedNumber } = this.state;
        return(
            <div>
                <h1>{number}</h1>
                <h3>건드려지지 않는 숫자 : {fixedNumber}</h3>
                <button onClick={(e) => {
                    this.setState(prevState => {
                        return { number: prevState.number + 1 }
                    });
                }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;