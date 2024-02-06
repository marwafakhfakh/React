import React, { useState } from 'react';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App(props) {
  
  const [tasks, setTasks] = useState(props.tasks);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
   }
   
  const taskList = tasks.map((task) => (
 <Todo
 id={task.id}
 name={task.name}
 completed={task.completed}
 key={task.id}
 deleteTask={deleteTask}
 />
));


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      {/* Pass the tasks array and the addTask function to the Form component */}
      <Form name="Ajouter" tasks={tasks} onAddTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton name="toutes" />
        <FilterButton name="Active" />
        <FilterButton name="Terminer" />
      </div>
      <h2 id="list-heading">3 tâches restantes</h2>
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
