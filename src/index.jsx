import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Todo from './components/Todo';
import Form from './components/Form';
import tasks from './data/tasks';

const App = ({ data }) => {
  const [tasks, setTasks] = useState(data);

  const taskList = tasks.map((element) => (
    <Todo
      key={element.id}
      id={element.id}
      description={element.description}
      tasks={tasks}
      setTasks={setTasks}
    />
  ));

  return (
    <div>
      <h1>Todo List</h1>
      <Form setTasks={setTasks} tasks={tasks} />
      <ul>{taskList}</ul>
    </div>
  );
};

ReactDom.render(<App data={tasks} />, document.querySelector('#root'));
