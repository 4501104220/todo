import React, { useState, useContext } from "react";
import "./todo.css";
import { TodoContext } from '../../../../context/todoContext'

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.title);
  const { todos } = useContext(TodoContext);
  console.log(todos);

  // Delete
  const handleClick = id => {
    remove(id);
  };

  // Edit
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };

  //Form edit
  const handleUpdate = evt => {
    evt.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = evt => {
    setTask(evt.target.value);
  };

  // Change status
  const toggleCompleted = evt => {
    toggleComplete(evt.target.id);
  };
  let result;
  if (isEditing) { 
    result = (
      <div className="Todo">
        {/* Form edit */}
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.title}
          {todo.deadline}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            Edit
          </button>
          <button onClick={()=>handleClick(todo.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
