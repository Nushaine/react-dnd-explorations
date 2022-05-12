import logo from './logo.svg';
import './App.css';
import Knight from './components/knight';
import Square from './components/square';
import Board from './components/board';
import { observe } from './game'
import React, { createContext, useEffect, useState } from 'react';

export const PositionContext = React.createContext([0, 0]);
function App() {

  const [position, setPos] = useState([0, 0])

  return (
    <PositionContext.Provider value={[position, setPos]}>
      <Board knightPosition={position} />  
    </PositionContext.Provider>
    
  );
}

export default App;
