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
    const name = this.state.list[id-1]
    this.setState({
      list: this.state.list.map(task => {
        if(task.id === id) {
          task.completed = !task.completed;
        }
        return task
      })
    })
    console.log(name)
  }
  render() {
    return (
      <>
      <Header />
      <TodoList list={this.state.list} handleStatusProp = {this.handleStatus} />
      </>
    )
  }
}

export default TodoContainer