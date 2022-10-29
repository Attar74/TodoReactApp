import React, { useState } from "react";
import Todos  from "./Todos";

function App() {
  const [todosList, settodosList] = useState([
    {
      id: 1,
      content: "Do 1",
    },
    {
      id: 2,
      content: "Do 2",
    },
  ]);

  const deleteTodo = (id)=>  {
    const todosCloned = todosList.filter((T) => {
      return T.id !== id;
    });
    settodosList(todosCloned);
  }
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos Todos={todosList} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
