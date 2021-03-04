import React, { useEffect, useState } from 'react';
import Task from './Task';
const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState(data);

  const renderedList = tasks.map((task) => {
    return (
      <li
        key={task.id}
        className='m-3 container mx-auto border-2 border-gray-300 rounded'
      >
        <Task task={task} />
      </li>
    );
  });

  return (
    <div className='flex flex-col justify-items-auto container mx-auto'>
      <h1 className='text-5xl relative'>Tasks</h1>
      {tasks ? (
        <ul className='list-inside list-none md:list-none'>{renderedList}</ul>
      ) : (
        'No current tasks'
      )}
    </div>
  );
};

export default TaskList;
