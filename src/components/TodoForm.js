import React from 'react'

const TodoForm = (props) => {
  return (
    <div>
      <form onSubmit={props.newTask}>
        <h1>New Task</h1>
        <br />
        <label htmlFor='task'>Description </label>
        <br />
        <input id='task' type='textarea'></input>
        <input type='submit' value='Add' />
      </form>
    </div>
  )
}

export default TodoForm
