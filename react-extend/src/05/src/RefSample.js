import React, { Component } from "react";

class RefSample extends Component {
    input = React.createRef();

    handleFoucs = () => {
        this.input.current.focus();
    }

    render() {
        return(
            <div>
                <input ref={this.input} />
                <button onClick={this.handleFoucs}>강제 포커스</button>
            </div>
        );
    }
}

export default RefSample;