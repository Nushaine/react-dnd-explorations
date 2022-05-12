import React, { useContext } from 'react'
import { PositionContext } from '../App'
import { canMoveKnight } from '../game'
import Knight from './knight'
import Square from './square'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import BoardSquare from './boardSquare'

function renderSquare(i, knightPosition) {
  const x = i % 8
  const y = Math.floor(i / 8)
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

export default function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  const [position, setPos] = useContext(PositionContext);  


  function handleSquareClick(toX, toY) {
    setPos([toX, toY])
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        onClick={(e) => handleSquareClick(Math.floor(e.clientX / 30), Math.floor(e.clientY / 30))}
        style={{
          width: 210,
          height: 210,
          display: 'flex',
          flexWrap: 'wrap',
          backgroundColor: 'black'
        }}
      >
        {squares}
      </div>  
    </DndProvider>
    
  )
}
