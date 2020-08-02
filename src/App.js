import React from 'react';
import './App.scss';
import Header from './molecules/Header'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container mt-5">
        <Home/>
      </div>
    </div>
  );
}

export default App;
