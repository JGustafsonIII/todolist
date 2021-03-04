import ReactDom from 'react-dom';
import React from 'react';
import App from './App';
import tasks from './data/tasks';

ReactDom.render(
  <React.StrictMode>
    <App data={tasks} />
  </React.StrictMode>,
  document.querySelector('#root')
);
