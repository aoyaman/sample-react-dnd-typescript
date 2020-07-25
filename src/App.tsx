import React from "react";

import Board from "./Board";

function App() {
  return (
    <div style={{ width: '500px', height: '500px', border: '1px solid black' }}>
      <Board knightPosition={[7, 4]} />
    </div>
  );
}

export default App;
