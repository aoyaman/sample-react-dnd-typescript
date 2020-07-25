import React from "react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Square from "./Square";
import Knight from "./Knight";
import BoardSquare from "./BoardSquare";
import { moveKnight, canMoveKnight } from './Game'
import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'


/** Styling properties applied to the board element */
const boardStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
}
/** Styling properties applied to each square element */
const squareStyle: React.CSSProperties = { width: '12.5%', height: '12.5%' }


export interface BoardProps {
  knightPosition: [number, number]
}

export const Board: React.FC<BoardProps> = ({
  knightPosition: [knightX, knightY]
}) => {

  const renderSquare = (i: number) => {
    const x = i % 8
    const y = Math.floor(i / 8)

    return (
      <div key={i} style={squareStyle}>
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y)}
        </BoardSquare>
      </div>
    )
  }
  const renderPiece = (x: number, y: number) => {
    const isKnightHere = x === knightX && y === knightY
    return isKnightHere ? <Knight /> : null
  }

  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={boardStyle}>
        {squares}
      </div>
    </DndProvider>
  );
};

export default Board;
