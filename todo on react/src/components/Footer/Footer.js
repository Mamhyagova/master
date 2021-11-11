import React from "react";

function Footer({ todos, setFilter, filter, deleteTodos }) {
  return (
    <div className="footer-container">
      <div className="result">
        {todos.filter((item) => !item.isChecked).length} items left{" "}
      </div>

      <div className="btnGroup">
        <button
          className={filter === "all" ? "used-filter-btn" : "unused-filter-btn"}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={
            filter === "active" ? "used-filter-btn" : "unused-filter-btn"
          }
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={
            filter === "completed" ? "used-filter-btn" : "unused-filter-btn"
          }
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <button className="delete-completed-btn" onClick={deleteTodos}>
        Delete completed
      </button>
    </div>
  );
}

export default Footer;
