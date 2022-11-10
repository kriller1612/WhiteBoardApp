import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
        <Board notes={[{owner: 'Kriller', xPos: 20, yPos: 20, content: "This is a note"}]} />
    </div>
  );
}

export default App;
