import React from 'react';
const Task = ({ task }) => {
  return <div className='inline'>{task.description}</div>;
};
export default Task;
