
export type CALLBACK = (positions: number[]) => void;

let knightPosition = [1, 7]
let observer:CALLBACK | null = null

const emitCharge = () => {
  if (observer) {
    observer(knightPosition);
  }
}

export function observe(o: CALLBACK) {
  if (observer) {
    observer(knightPosition);
  }
  observer = o;
  emitCharge();
}

export const moveKnight = (toX:number, toY:number) => {
  knightPosition = [toX, toY];
  emitCharge();
}

export const canMoveKnight = (toX:number, toY:number) => {
  const [x, y] = knightPosition
  const dx = toX - x
  const dy = toY - y

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}
