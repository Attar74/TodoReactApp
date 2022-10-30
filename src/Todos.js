import "./index.css";

const Todos = ({ Todos, deleteTodo }) => {
  const TodosLength = Todos.length;

  const listTodos = TodosLength ? (
    Todos.map((T) => {
      return (
        <div className="collection-item d-flex" key={T.id}>
          <span>{T.title}</span>
          <button onClick={()=>{deleteTodo(T.id)}} className="btn-floating btn-medium waves-effect waves-light red">
            <i className="material-icons">delete</i>
          </button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no Todo's</p>
  );
  return <div className="todos collection">{listTodos}</div>;
};

export default Todos;
