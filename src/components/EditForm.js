import React from 'react'

const EditForm = (props) => {
  return (
    <div>
      <form onSubmit={props.newTask}>
        <h1>Edit Task</h1>
        <br />
        <label htmlFor='task'>Description </label>
        <br />
        <input id='task' type='textarea' value={props.state}></input>
        <input type='submit' value='Add' />
      </form>
    </div>
  )
}

export default EditForm
