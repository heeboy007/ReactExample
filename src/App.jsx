import React, { Component } from 'react';
import TOC from './components/TOC.jsx';
import Subject from './components/Subject.jsx';
import ReadContent from './components/ReadContent.jsx';
import CreateContent from './components/CreateContent.jsx';
import UpdateContent from './components/UpdateContent.jsx';
import Control from './components/Control.jsx';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
	this.max_content_id = 3;
	//위의 변수가 state가 아닌 이유는 id값 지정시 참고만 하지 UI에 영향을 주지 않기 때문.
	//state에 넣을지 말지 판단하는 것이 어렵다면 그냥 다 넣을 것.
    this.state = {
      mode: 'read',
	  selected_content_id: 2,
      subject: {title:'WEB', sub:'World Wide Web!'},
      welcome: {title:'Welcome', desc:'Hello, React!!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
		{id:3, title:'JavaScript', desc:'JS is for mobility'}
      ]
    }
  }
  
  render() {
    console.log('App render');
    var _title = null, _desc = null, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
	  _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
	  var i = 0;
	  while(i < this.state.contents.length){
	    var data = this.state.contents[i];
	    if(data.id === this.state.selected_content_id){
			_title = data.title;
			_desc = data.desc;
			break;
		}
		i = i + 1;
	  }
	  _article = <ReadContent title={_title} desc={_desc}></ReadContent>
      //_title = this.state.contents[0].title;
      //_desc = this.state.contents[0].desc;
    } else if (this.state.mode === 'create'){
	  _article = <CreateContent onSubmit={function(_title, _desc){
			this.max_content_id = this.max_content_id + 1;
			//this.state.contents.push(
			//	{id:this.max_content_id, title: _title, desc:_desc}
			//);
			//var _contents = this.state.contents.concat(
			//	{id:this.max_content_id, title: _title, desc:_desc}
			//);
			var newContents = Array.from(this.state.contents);
			newContents.push({id:this.max_content_id, title:_title, desc:_desc});
			this.setState({
				contents: newContents
			});
			console.log(_title, _desc);
		}.bind(this)}></CreateContent>
	}
	console.log("render", this);
    return (
      <div className="App">
        <Subject 
        	title={this.state.subject.title} 
        	sub={this.state.subject.sub}
			onChangePage={ function() {
				this.setState({ mode: "welcome" });
			}.bind(this)}>
        </Subject>
        <TOC 
			data={this.state.contents}
			onChangePage={function(id) {
				this.setState({ 
					mode:"read",
					selected_content_id:Number(id)
				});
			}.bind(this)}></TOC>
		<Control onChangeMode={function(_mode){
				this.setState({
					mode:_mode
				});
			}.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;