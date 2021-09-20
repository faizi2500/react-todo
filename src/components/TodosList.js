import React from "react";
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render () {
    return (
      <ul>
          {this.props.list.map(task => (
            <TodoItem key = { task.id } task = { task } handleStatusProp = {this.props.handleStatusProp}/>
          ))}
        </ul>
    )
  }
}

export default TodoList