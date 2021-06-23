import React, { useRef, useState } from "react";

const TodoForm = ({ addTodo }) => {
  const input = useRef("");
  const [todo, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(`submitting todo: ${todo} @@TodoForm`);
    addTodo(todo);
    setTodo("");
  };

  const handleChange = () => {
    setTodo(input.current.value);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label htmlFor="new-todo-input">What needs doing?</label>
      <div className="todo-input-container">
        <input
          type="text"
          id="new-todo-input"
          value={todo}
          onChange={handleChange}
          ref={input}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
