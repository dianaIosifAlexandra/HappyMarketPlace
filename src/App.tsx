import React, { FC } from 'react';
import './App.scss';
import ReactRouter from './components/Routes/Routes';

const App: FC = () => {
  return (
    <div className="App">
      <ReactRouter />
    </div>
  );
};

export default App;
