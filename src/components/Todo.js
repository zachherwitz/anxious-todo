import React from "react";

const Todo = ({ todo, deleteTodo, index }) => {
  return (
    <li className={`todo todo-${index}`}>
      {todo}
      <button
        onClick={() => {
          deleteTodo(index);
        }}
      >
        X
      </button>
    </li>
  );
};

export default Todo;
