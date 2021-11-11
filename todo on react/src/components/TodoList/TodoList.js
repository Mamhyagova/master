import React from "react";

function TodoList({ todos, changeTodo, deleteTodo }) {
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li className="list-item" key={item.id}>
            <div className="liContainer">
              <input
                className="checkbox"
                id={item.id}
                checked={item.isChecked}
                type="checkbox"
                onChange={() => changeTodo(item.id)}
              ></input>
              <label
                className={item.isChecked ? "close" : ""}
                htmlFor={item.id}
              >
                {item.title}
              </label>
            </div>
            <button
              className="delete-button"
              onClick={() => deleteTodo(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
