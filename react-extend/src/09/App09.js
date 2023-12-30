import React, { Component } from "react";
import './App09.css';

class App09 extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-Header">
                    <p>1. 그냥 CSS써보기</p>
                    CSS를 작성할 때 가장 중요한 점은 CSS 클래스를 중복되지 않게 만드는 것이다.<br/>
                    그런 방법에는 여러 가지가 있는데, 하나는 <b>이름을 지을 때 특별한 규칙을 사용(BEM 네이밍 등)</b>하여 짓는 것이고,<br/>
                    또 다른 하나는 CSS Selector를 활용하는 것이다. <br/>
                    
                </header>
            </div>
        );
    }
}


export default App09;
