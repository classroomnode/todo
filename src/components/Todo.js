import React, { useState, useEffect } from "react";
import "../styles/todo.css";
import TodoList from "./TodoList";
function Todo() {
  const [value, setValue] = useState("");
  const [todoresult, setToDoResult] = useState("");
  const [todos, setToDos] = useState([]);

  function onBluChange(event) {
    setValue(event.target.value);
  }

  //call all todos
  useEffect(() => {
    let url = "http://localhost:8080/api/todos";
    fetch(url)
      .then(data => data.json())
      .then(result => {
        if (result.todos) {
          setToDos(result.todos);
        }
      });
  }, [todoresult]);

  //adds a todo
  useEffect(() => {
    if (value !== "") {
      let url = `http://localhost:8080/api/todo?text=${value}`;
      fetch(url)
        .then(data => data.json())
        .then(result => {
          setToDoResult(result);
        });
    }
  }, [value]);

  return (
    <div>
      <div className={"todo-section"}>
        <p className={"todo-title"}>{"Please enter todays tasks"}</p>

        <input
          placeholder={"enter a task name"}
          className={"todo-input"}
          type={"text"}
          onBlur={onBluChange}
        ></input>
      </div>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}
export default Todo;
