import React from "react";
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

class TodoItem extends React.Component {
  state = {
    editing: false,
  }
  
  handleEditing = () => {
    this.setState({
      editing: true,
    })
    console.log('editable')
  }

  handleUpdateDone = (event) => {
    console.log(event.key);
    if (event.key === 'Enter') {
      this.setState({editing: false})
    }
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
    let viewMode ={};
    let editMode = {};
    if (this.state.editing) {
      viewMode.display = 'none'
    } else {
      editMode.display = 'none'
    }
    return (
      <li className="styles.item">
        <div onDoubleClick = {this.handleEditing} style= {{display: "flex", justifyContent: "space-between", viewMode}} className= "flex-box">
        <div> 
        <input type="checkbox" className={styles.checkbox} checked = {completed } onChange={() => this.props.handleStatusProp(this.props.task.id)} />
        <span style={ completed ? completedStyle : null}>
          { title }
        </span>
        </div>
        <div>
        <button onClick={() => this.props.deleteTodoProp( id )}><FaTrash style={{ color: "orangered", fontSize: "16px" }} /></button>
        </div>
        </div>
        <input type= "text" style= {editMode} className = {styles.textInput} value={title} onChange={e =>{
          this.props.setUpdate(e.target.value, id);
        }} onKeyDown = {this.handleUpdateDone}/>
      </li>
    )
  }
}


export default TodoItem