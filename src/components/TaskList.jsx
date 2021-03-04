import React, { useEffect, useState } from 'react';
import Task from './Task';
const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState(data);

  /**
   *  Handles deleting a Task
   * @param {number} id Used as identification to delete a specific element
   */
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  /**
   * Handles saving the editted task into the state
   * @param {Task Object} edit The task that was modified
   */
  const handleEdit = (edit) => {
    let todos = [...tasks]; // Copy State
    let index = todos.findIndex((todo) => todo.id === edit.id); // Find index of editted element
    todos[index].description = edit.description; // Change the description of the element
    setTasks(todos); // Save the updated array to state
  };

  const renderedList = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        task={task}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    );
  });

  return (
    <div className='ui container'>
      <h1>Tasks</h1>
      {tasks ? <ul>{renderedList}</ul> : 'No current tasks'}
    </div>
  );
};

export default TaskList;
