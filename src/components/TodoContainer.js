import React from "react";
import TodoList from './TodosList'
import Header from './Header'

class TodoContainer extends React.Component {
  state = {
    list: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
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

  render() {
    return (
      <>
      <Header />
      <TodoList list={this.state.list} handleStatusProp = {this.handleStatus} deleteTodoProp = { this.deleteBtn }/>
      </>
    )
  }
}

export default TodoContainer