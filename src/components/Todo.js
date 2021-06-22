import React from "react";

const Todo = ({ todo, deleteTodo, index }) => {
  return (
    <li>
      {todo}
      <input
        type="checkbox"
        onClick={() => {
          deleteTodo(index);
        }}
      />
    </li>
  );
};

export default Todo;
