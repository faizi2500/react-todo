import React from "react";
class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" />
        {this.props.task.title}
      </li>
    )
  }
}


export default TodoItem