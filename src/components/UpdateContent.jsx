import React, { Component } from 'react';

class UpdateContents extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
		  id: this.props.id,
		  title: this.props.data.title,
		  desc: this.props.data.desc
	  };
	  this.inputFormHandler = this.inputFormHandler.bind(this);
  }
	
  inputFormHandler(e){
	  this.setState({
		  [e.target.name]:e.target.value
	  });
  }
	
  render() {
	console.log(this.props.data);
    console.log('UpdateContents render');
    return (
    	<article>
			<h2>Update</h2>
			<form action="/create_process" method="post"
				onSubmit={ function(e) {
					e.preventDefault();
					this.props.onSubmit(
						this.state.id,
						this.state.value,
						this.state.value
					);
					alert("Submit!");
				}.bind(this)}>
				<p><input 
					   type="text" 
					   name="title" 
					   placeholder="title"
					   value={this.state.title}
					   onChange={this.inputFormHandler}></input></p>
				<input type="hidden" name="id" value={this.state.id}></input>
				<p>
					<textarea 
						name="desc" 
						placeholder="description"
						value={this.state.desc}
						onChange={this.inputFormHandler}></textarea>
				</p>
				<p>
					<input type="submit"></input>
				</p>
			</form>
    	</article>
    );
  }
}

export default UpdateContents;