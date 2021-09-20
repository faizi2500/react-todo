import React from "react";
class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked = { this.props.task.completed } onChange={() => this.props.handleStatusProp(this.props.task.id)} />
        <button onClick={() => this.props.deleteTodoProp(this.props.task.id)}>Delete</button>
        {this.props.task.title}
      </li>
    )
  }
}


export default TodoItem