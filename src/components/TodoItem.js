import React from "react";
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
  handleEditing = () => {
    console.log('editable')
  }
  render() 
  {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const { completed, id, title } = this.props.task;
    return (
      <li className="styles.item">
        <div onDoubleClick = {this.handleEditing}>
        <input type="checkbox" className={styles.checkbox} checked = {completed } onChange={() => this.props.handleStatusProp(this.props.task.id)} />
        <span style={ completed ? completedStyle : null}>
          { title }
        </span>
        <button onClick={() => this.props.deleteTodoProp( id )}>Delete</button>
        </div>
      </li>
    )
  }
}


export default TodoItem