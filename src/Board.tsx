import React from "react";
import Square from "./Square";
import Knight from "./Knight";
import { moveKnight, canMoveKnight } from './Game'

type Props = {
  knightPosition: number[],
};

const Board: React.FC<Props> = ({ knightPosition }) => {

  const renderSquare = (i: number, [knightX, knightY]:number[]) => {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isKnightHere = x === knightX && y === knightY
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knight /> : null

    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }} onClick={()=>handleSquareClick(x,y)}>
        <Square black={black}>{piece}</Square>
      </div>
    )
  }

  const handleSquareClick = (toX:number, toY:number) => {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }

  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%" ,
        display: 'flex',
        flexWrap: 'wrap'
      }}>
      {squares}
    </div>
  );
};

export default Board;
