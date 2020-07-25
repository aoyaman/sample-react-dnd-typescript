import React from "react";
import { ItemTypes } from './Constants'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { knightImage } from "./knightImage";

const Knight = () => {
  const [{isDragging}, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 40,
          fontWeight: 'bold',
          cursor: 'move',
        }}
      >
        ♘
      </div>
    </>
  );
}

export default Knight;
