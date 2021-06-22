import React from "react";

const LocalStorageTest = () => {
  const depositInLocalStorage = () => {
    console.log("setting array of items in LOCAL STORAGE");
    let todoArray = ["todo1", "todo2", "todo3"];
    console.log(todoArray, "todoArray");
    let convertedTodoArray = JSON.stringify(todoArray);
    window.localStorage.setItem("todos", convertedTodoArray);
    console.log("array of items added!");
  };

  return (
    <div>
      <p>testing local storage pull</p>
      <button onClick={depositInLocalStorage}>Add to Storage</button>
      {JSON.parse(window.localStorage.getItem("todos"))}
      <button>Overwrite Storage</button>
    </div>
  );
};

export default LocalStorageTest;
