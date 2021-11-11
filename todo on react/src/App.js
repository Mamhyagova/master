import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import CompleteAllTodos from "./components/CompleteAllTodos/CompleteAllTodos";
import Footer from "./components/Footer/Footer";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");
  const [value, setValue] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter" && value.trim() !== "") {
      setTodo([
        ...todos,
        {
          id: uuid(),
          title: value,
          isChecked: false,
        },
      ]);
      setValue("");
    } else if (e.key === "Enter" && value.trim() === "") {
      alert("You can not create empty todo");
    }
  }

  function handleDeleteTodo(id) {
    const newTodo = [...todos].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  function handleChangeTodo(id) {
    const todoArr = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      }
      return item;
    });

    setTodo(todoArr);
  }

  function completeAllTodos() {
    const isAllChecked = todos.every((todo) => todo.isChecked);

    const todoArr = todos.map((todo) => {
      if (isAllChecked === false) {
        return {
          ...todo,
          isChecked: true,
        };
      } else {
        return {
          ...todo,
          isChecked: false,
        };
      }
    });
    setTodo(todoArr);
  }

  const getVisibleTodos = () => {
    if (filter === "all") {
      return todos;
    }

    if (filter === "completed") {
      return todos.filter((item) => item.isChecked);
    }

    if (filter === "active") {
      return todos.filter((item) => !item.isChecked);
    }
  };

  function deleteCompletedTodos() {
    const newTodos = todos.filter((item) => !item.isChecked);
    setTodo(newTodos);
  }

  return (
    <div className="todos">
      <Header />
      <div className="todo-list">
        <div className="input-container">
          <CompleteAllTodos todos={completeAllTodos} setTodo={setTodo} />
          <AddTodo todos={handleKeyDown} setValue={setValue} value={value} />
        </div>
        <TodoList
          todos={getVisibleTodos()}
          changeTodo={handleChangeTodo}
          deleteTodo={handleDeleteTodo}
        />
        <Footer
          todos={todos}
          setFilter={setFilter}
          filter={filter}
          deleteTodos={deleteCompletedTodos}
        />
      </div>
    </div>
  );
}

export default App;
