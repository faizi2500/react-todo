import React, {useState, useEffect} from "react";
import TodoList from './TodosList'
import Header from './Header'
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {

  const [list, setList] = useState(getInitialTodos())

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(list)
    localStorage.setItem("list", temp)
  }, [list])

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("list")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  // useEffect(() => {
  //   console.log("test run")
  //   const initialList = JSON.parse(localStorage.getItem('list'));
  //   if (initialList) {
  //     setList(initialList)
  //   }
  // }, [])

  const handleChange = id => {
    setList(prevState =>
      prevState.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          }
        }
        return task
      })
    )
  }

  const delTodo = id => {
    setList([
      ...list.filter(task => {
        return task.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setList([...list, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setList(
      list.map(task => {
        if (task.id === id) {
          task.title = updatedTitle
        }
        return task
      })
    )
  }

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoItemProp={addTodoItem} />
        <TodoList
          list={list}
          handleStatusProp={handleChange}
          deleteTodoProp={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  )
}
export default TodoContainer