const Todos = ({ Todos, deleteTodo }) => {
  const TodosLength = Todos.length;

  const listTodos = TodosLength ? (
    Todos.map((T) => {
      return (
        <div className="collection-item" key={T.id}>
          <span onClick={()=>{deleteTodo(T.id)}}> {T.content}</span>
        </div>
      );
    })
  ) : (
    <div>
      <p className="center">You have no Todo's</p>
    </div>
  );
  return <div className="todos collection">{listTodos}</div>;
};

export default Todos;
