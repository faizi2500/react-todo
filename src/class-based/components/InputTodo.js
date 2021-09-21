// import React from "react";
import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: ''
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.title.trim()){
      this.props.addTodoItemProp(this.state.title);
      this.setState({
      title: ""
    });
    }
    else {
      alert('Please write item')
    }
    
    // console.log(this.state.title);
  }

  render() {
    return(
      <div>
        <form onSubmit = {this.handleSubmit} className="form-container">
        <input type ="text" className="input-text" placeholder = "Add Todo..." name="title"    value= { this.state.title } onChange={this.onChange}/>
        <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default InputTodo