import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [alert, setAlert] = useState("");

  const overwhelm = () => {
    const alerts = [
      "this is starting to get overwhelming",
      "lets just stick with four",
      "what if we just get rid of a few...",
    ];
    let randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
    setAlert(randomAlert);

    setTimeout(() => {
      setAlert("");
    }, 1000);
  };

  const addTodo = todo => {
    console.log("recieved todo: ", todo);
    if (todos.length > 3) {
      overwhelm();
      let newTodos = todos.shift();
      setTodos(newTodos);
    } else {
      setTodos([...todos, todo]);
    }
    setTodos([...todos, todo]);

    // if (todoList.length > 3) {
    //   todoList.pop();
    // }
  };

  return (
    <div className="todos">
      <TodoForm addTodo={addTodo} />
      {todos.length > 0 ? (
        todos.map((todo, i) => {
          return <Todo todo={todo} key={i} />;
        })
      ) : (
        <p>no data yet</p>
      )}
      <br />
      <br />
      <h3>{alert}</h3>
    </div>
  );
};

export default Todos;
