import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const updateTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.length) addTodo(title);
    setTitle('');
  }
  return (
    <div className="addForm">
      <form onSubmit={handleSubmit}>
        <label> Add Todo </label>
        <input
          onChange={updateTitle}
          type="text"
          name="title"
          id="title"
          placeholder="Add Todo Title"
          value={title}
        />
        <button
          className="btn waves-effect waves-light blue"
          type="submit"
          name="action"
        >
          Add<i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
