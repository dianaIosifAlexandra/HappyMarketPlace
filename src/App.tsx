import React, { FC } from 'react';
import './App.scss';
import ReactRouter from './components/Routes/Routes';
import { ThemeProvider } from '@mui/material/styles';
import theme from './style/theme/theme';

const App: FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ReactRouter />
      </ThemeProvider>
    </div>
  );
};

export default App;
