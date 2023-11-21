import { Component } from 'react';
import './App.css';

class Nav extends Component {
  state = {
    list: []
  }

  componentDidMount(){
    fetch('list.json')
      .then(function(result){
        return result.json();
      })
      .then(function(json){
        this.setState({list:json});
      }.bind(this));
    //가져온 값은 state라는 좋은 재렌더링 + 저장 기능을 통해서
    //렌더링을 게시하자. 바로 렌더링에 영향을 주는 것은 좋지 않다.
  }

  render() {
    var listTag = [];
    for(var i = 0; i < this.state.list.length; i++){
      var li = this.state.list[i];
      listTag.push(<li key={li.id}><a href={li.id}>{li.title}</a></li>);
    }
    return(
      <nav>
        <ul>
          {listTag}
        </ul>
      </nav>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav></Nav>
      <article>
        <h2>Welcome</h2>
        Hello, React &amp; Ajax
      </article>
    </div>
  );
}

export default App;
