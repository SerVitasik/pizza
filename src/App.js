import React from 'react';
import './App.css';
import Dishes from './components/Dishes/Dishes';
import Header from './components/Layout/Header';


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <Dishes />
      </main>
    </React.Fragment>
  );
}

export default App;
