import React from "react";
import "../styles/todolist.css";
function TodoList({ todos }) {
  return (
    <div className={"todo-list"}>
      <table>
        <tbody>
          <tr>
            <th>{"Name"}</th>
            <th>{"Date"}</th>
          </tr>
          {todos &&
            todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.name}</td>

                <td>{todo.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
