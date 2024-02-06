import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function Form(props) {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();

    // Create a new todo object
    const newTodoItem = { id, name: newTodo, completed: false };

    // Clear the input field
    setNewTodo('');

    // Pass the new task to the App component
    props.onAddTask(newTodoItem);
  };

  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input2" className="label__lg">
          Qu'y a-t-il à faire&nbsp;?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={newTodo}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit} className="btn btn__primary btn__lg">
        {props.name}
      </button>
    </form>
  );
}

export default Form;
