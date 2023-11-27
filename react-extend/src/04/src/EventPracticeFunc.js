import React, { useState } from "react";

function EventPracticeFunc() {
    const [ username, setUserName ] = useState('');
    const [ message, setMessage ] = useState('');

    const onChangeUsername = e => setUserName(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);

    const handleClick = () => {
        alert(username + ':' + message);
        setUserName('');
        setMessage('');
    };

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습 2</h1>
            <input 
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}/>
            <input 
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={handleKeyPress}/>
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default EventPracticeFunc;