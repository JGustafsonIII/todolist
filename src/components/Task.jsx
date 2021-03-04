import React, { useState } from 'react';
const Task = ({ task, handleDelete, handleEdit }) => {
  const [isVisible, setVisibility] = useState(false);
  const [edit, setEdit] = useState(task);

  return (
    <li>
      {task.description}
      <input
        value='Delete'
        type='button'
        onClick={() => handleDelete(task.id)}
      />
      <input
        value='Edit'
        type='button'
        onClick={() => setVisibility(!isVisible)}
      />
      {isVisible && (
        <div>
          <input
            type='text'
            value={edit.description}
            onChange={(e) => setEdit({ ...edit, description: e.target.value })}
          />
          <input
            type='button'
            value='Submit'
            onClick={() => {
              setVisibility(false);
              handleEdit(edit);
            }}
          />
        </div>
      )}
    </li>
  );
};
export default Task;
