import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Alert from "./Alert";
import TodoForm from "./TodoForm";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("anxious__todos"))?.length > 0) {
      let pulledTodos = JSON.parse(
        window.localStorage.getItem("anxious__todos")
      );
      setAlert("");
      setTodos(pulledTodos);
    } else {
      setAlert("please add some items!");
    }
  }, []);

  /*
      Todo Maintenance
  */

  const addTodo = todo => {
    todo = validateInput(todo);
    if (todos.length <= 2) {
      setAlert("");
      let updatedTodos = [...todos, todo];
      processAndUpdateStorage(updatedTodos);
    } else if (todos.length > 2) {
      let updatedTodos = todos;
      let removedTodo = updatedTodos.shift();
      setAlert(`too many todos! let's remove this one: ${removedTodo}`);
      processAndUpdateStorage([...updatedTodos, todo]);
    } else {
      console.log("something went wrong in the if/else @@Todos");
    }
  };

  const deleteTodo = i => {
    let updatedTodos = todos.filter(todo => todos.indexOf(todo) !== i);
    processAndUpdateStorage(updatedTodos);
    setAlert("phew, i was getting worried about that one");
  };

  const deleteAllTodos = () => {
    let updatedTodos = [];
    processAndUpdateStorage(updatedTodos);
    setAlert("please add some items!");
  };

  /*
      HELPER FUNCTIONS
  */
  const processAndUpdateStorage = arr => {
    setTodos(arr);
    window.localStorage.setItem("anxious__todos", JSON.stringify(arr));
  };

  const validateInput = todo => {
    if (typeof todo !== "string") {
      setAlert("um, whatever you're trying to do... please don't");
      return;
    }

    if (todo.length > 70) {
      todo = todo.slice(0, 70);
    }

    return todo;
  };

  // const timeoutAlert = str => {
  //   setAlert(str);
  // // TODO - SetTimeout Promise Chainging Stuff
  //   setTimeout(() => {
  //     console.log("begining timeout");
  //     console.log(alert);
  //     setAlert("");
  //   }, 2000);
  // };

  return (
    <div className="todos-container">
      <TodoForm addTodo={addTodo} />
      <ul className="todos">
        {todos?.map((todo, i) => {
          return <Todo todo={todo} key={i} index={i} deleteTodo={deleteTodo} />;
        })}
      </ul>
      <Alert alert={alert} />
      <button onClick={deleteAllTodos}>Delete All</button>
    </div>
  );
};

export default Todos;
