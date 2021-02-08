import React from 'react'
import ReactDom from 'react-dom'
import Todo from './components/Todo'
import AddTodo from './components/TodoForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: Math.floor(Math.random() * 100) + 1,
          task: 'You gotta do this Todo app man',
        },
        {
          id: Math.floor(Math.random() * 100) + 1,
          task: 'Set up a portfolio man',
        },
      ],
    }
  }

  newTask = (e) => {
    e.preventDefault()
    let task = { task: document.querySelector('#task').value }
    this.setState({ todos: [...this.state.todos, task] })
  }

  deleteTask = (e) => {
    let temp = this.state.todos

    let filtered = temp.filter((value, index, arr) => {
      return index != e.target.id
    })

    this.setState({ todos: filtered })
  }

  editTask = (e) => {
    let p = document.querySelector(`#${e.target.id}`)
    console.log(p)
  }

  render() {
    return (
      <div>
        {this.state.todos.map((task) => {
          return (
            <Todo
              task={task}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
            />
          )
        })}
        <AddTodo newTask={this.newTask} />
        <button>Add New Task</button>
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
