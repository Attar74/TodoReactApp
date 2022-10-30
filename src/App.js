import React, { useState } from "react";
import Todos  from "./Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [todosList, settodosList] = useState([
    {
      id: 1,
      title: "Do 1",
    },
    {
      id: 2,
      title: "Do 2",
    },
  ]);

  const deleteTodo = (id)=>  {
    const todosCloned = todosList.filter((TODO) => {
      return TODO.id !== id;
    });
    settodosList(todosCloned);
  }
  const addTodo = (title) => {
    settodosList([...todosList, { title, id: todosList.length+1}]);
  };
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <div className="row">
        <div className="col s6 offset-s3">
          <Todos Todos={todosList} deleteTodo={deleteTodo} />
        </div>
      </div>
      <div className="row">
        <div className="col s6 offset-s3">
          <AddTodo addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
