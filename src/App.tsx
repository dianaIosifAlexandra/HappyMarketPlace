import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Products from './pages/Products/Products';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>{/* <Products /> */}</main>
    </div>
  );
}

export default App;
