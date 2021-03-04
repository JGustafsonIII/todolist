import React, { useEffect, useState } from 'react';
import Task from './Task';
const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState(data);

  const renderedList = tasks.map((task) => {
    return (
      <li key={task.id}>
        <Task task={task} />
      </li>
    );
  });

  return (
    <div>
      <h1>Tasks</h1>
      {tasks ? renderedList : 'No current tasks'}
    </div>
  );
};

export default TaskList;
