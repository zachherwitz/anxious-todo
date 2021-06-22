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
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo-input">What needs doing?</label>
      <br />
      <input
        type="text"
        id="new-todo-input"
        value={todo}
        onChange={handleChange}
        ref={input}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
