import React from 'react'

const Todo = (props) => {
  const { task, deleteTask, editTask } = props
  return (
    <div>
      <input
        htmlFor={task.id}
        type='button'
        value='Delete'
        onClick={deleteTask}
      />
      <input type='button' value='Edit' onClick={editTask} />
      <p id={task.id}>{task.task}</p>
    </div>
  )
}

export default Todo
