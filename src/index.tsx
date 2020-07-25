import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Board from './Board'
import { observe } from './Game'

observe((knightPosition) =>
ReactDOM.render(
  <React.StrictMode>
    <div style={{ width: '500px', height: '500px', border: '1px solid black' ,fontSize: "50px" }}>
      <Board knightPosition={knightPosition} />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
