import React, { FC } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ReactRouter from './components/Routes/Routes';

const App: FC = () => {
  return (
    <div className="App">
      <ReactRouter />
    </div>
  );
};

export default App;
