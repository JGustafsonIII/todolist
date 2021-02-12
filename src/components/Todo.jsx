import React, { useState } from 'react';

const Todo = ({ id, description, tasks, setTasks }) => {
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState({});

  const editTask = (e) => {
    const index = tasks.indexOf(task);
    const temp = tasks;
    temp[index] = { id: task.id, description: task.description };
    setTasks(temp);
    setEdit(false);
  };

  const editModal = (id) => {
    const toBeEdited = tasks.find((element) => {
      return element.id === id;
    });
    setTask(toBeEdited);
    setEdit(true);
  };

  const deleteTask = (id) => {
    let filtered = tasks.filter((value) => {
      return value.id != id;
    });

    setTasks(filtered);
  };

  return (
    <li>
      <p>{description}</p>
      {edit && (
        <form onSubmit={(e) => editTask(e)}>
          <input
            type='text'
            value={task.description}
            onChange={(e) => setTask({ description: e.target.value })}
          />
          <input type='submit' value='Submit' />
        </form>
      )}
      <input type='button' value='Delete' onClick={() => deleteTask(id)} />
      <input type='button' value='Edit' onClick={() => editModal(id)} />
    </li>
  );
};

export default Todo;
