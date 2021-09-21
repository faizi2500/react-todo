import React from "react";
import TodoList from './TodosList'
import Header from './Header'
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    list: []
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState !== this.state.list) {
      localStorage.setItem('list', JSON.stringify(this.state.list))
    }
  }

  componentDidMount() {
    const initialList = JSON.parse(localStorage.getItem('list'));
    if(initialList) {
      this.setState({
        list: initialList
      });
    }
  }

  handleStatus = (id) => {
    this.setState(prevState => ({
        list: prevState.list.map(task => {
          if(task.id === id) {
            return {
              ...task,
              completed: !task.completed,
            } 
          }
          return task
        }),
    }))
  }

  deleteBtn = id => {
    this.setState(prevState =>({
      list: [
        ...prevState.list.filter(task => {
          return task.id !== id;
        })
      ]
    }))
  }

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    this.setState({
      list: [...this.state.list, newTodo]
    });
  }

  setUpdate = (updatedTitle, id) => {
    this.setState({
      list: this.state.list.map(task => {
        if (task.id === id) {
          task.title = updatedTitle
        }
        return task
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className ="inner">
          <Header />
          <InputTodo  addTodoItemProp = {this.    addTodoItem}/>
          <TodoList list={this.state.list}    handleStatusProp = {this.handleStatus}  deleteTodoProp = { this.deleteBtn } setUpdate={this.setUpdate}/>
        </div>
      </div>
    )
  }
}

export default TodoContainer