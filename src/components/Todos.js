import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Alert from "./Alert";
import TodoForm from "./TodoForm";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("todos"))?.length > 0) {
      let pulledTodos = JSON.parse(window.localStorage.getItem("todos"));
      setAlert("");
      setTodos(pulledTodos);
    } else {
      setAlert("please add some items!");
    }
  }, []);

  const addTodo = todo => {
    if (todos.length <= 2) {
      timeoutAlert("");
      let updatedTodos = [...todos, todo];
      processAndUpdateStorage(updatedTodos);
    } else if (todos.length > 2) {
      let updatedTodos = todos;
      let removedTodo = updatedTodos.shift();
      timeoutAlert(`too many todos! let's remove this one: ${removedTodo}`);
      processAndUpdateStorage([...updatedTodos, todo]);
    } else {
      console.log("something went wrong in the if/else @@Todos");
    }
  };

  const deleteTodo = i => {
    let updatedTodos = todos.filter(todo => todos.indexOf(todo) !== i);
    processAndUpdateStorage(updatedTodos);
    timeoutAlert("phew, i was getting worried about that one");
  };

  const deleteAllTodos = () => {
    let updatedTodos = [];
    processAndUpdateStorage(updatedTodos);
    setAlert("please add some items!");
  };

  // HELPER FUNCTIONS
  const processAndUpdateStorage = arr => {
    setTodos(arr);
    window.localStorage.setItem("todos", JSON.stringify(arr));
  };

  const timeoutAlert = str => {
    setAlert(str);
    // TODO - SetTimeout Promise Chainging Stuff
    // setTimeout(() => {
    //   console.log("begining timeout");
    //   console.log(alert);
    //   setAlert("");
    // }, 2000);
  };

  return (
    <div className="todos">
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos?.map((todo, i) => {
          return <Todo todo={todo} key={i} index={i} deleteTodo={deleteTodo} />;
        })}
      </ul>
      <br />
      <br />
      <Alert alert={alert} />
      <button onClick={deleteAllTodos}>Delete All</button>
    </div>
  );
};

export default Todos;
