import React from "react";

function AddTodo({ todos, setValue, value }) {
  return (
    <input
      className="input"
      onKeyDown={todos}
      placeholder="What needs to be done?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default AddTodo;
