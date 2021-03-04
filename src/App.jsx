import React, { useState } from 'react';
import TaskList from './components/TaskList';

const App = ({ data }) => {
  return (
    <div>
      <TaskList data={data} />
    </div>
  );
};

export default App;
