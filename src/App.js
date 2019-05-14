import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      App container
      <br/>
      <MainContainer />
      <Login />
      <br/>
      <Register />
    </div>
  );
}

export default App;
