import React, { useState } from 'react';

const Form = ({ setTasks, tasks }) => {
  const [description, setDescription] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    let newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
      description: description,
    };

    setTasks([...tasks, newTask]);
    setDescription('');
  };

  return (
    <div>
      <form onSubmit={(e) => addTask(e)}>
        <label>Add Task</label>
        <br />
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Form;
