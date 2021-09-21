// import React from "react";
import React, { useState } from "react";

const InputTodo = (props) => {
  const [inputText, setTitle] = useState({
    title: '',
  });

  const onChange = e => {
    setTitle({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTodoItemProp(inputText.title)
      setTitle({
        title: '',
      })
    } else {
      alert("Please write item")
    }
  }

  return (
    <form onSubmit = {handleSubmit} className="form-container">
      <input type ="text" className="input-text" placeholder = "Add Todo..." name="title" value= { inputText.title } onChange={onChange}/>
      <button className= "input-submit">Submit</button>
    </form>
  )
}


export default InputTodo