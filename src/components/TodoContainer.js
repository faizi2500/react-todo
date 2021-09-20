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
  render() {
    return (
      <>
      <Header />
      <TodoList list={this.state.list} />
      </>
    )
  }
}

export default TodoContainer