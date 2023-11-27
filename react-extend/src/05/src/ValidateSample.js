import React, { Component } from "react";
import './ValidateSample.css'

class ValidateSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false,
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = (e) => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    ref={(ref) => this.input=ref}
                    className={this.state.clicked? (this.state.validated ? 'success' : 'failure') : ''}/>
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

/*
DOM을 꼭 사용해야 하는 상황
1. 특정 input에 focus
2. 스크롤 박스 조작
3. Canvas요소에 그림그리기
*/

export default ValidateSample;