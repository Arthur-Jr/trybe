
import React, { useState } from 'react';
import MoveContext from './moveContext';

function MoveProvider({ children }) {
  const [red, moveRed] = useState(false);
  const [blue, moveBlue] = useState(false);
  const [yellow, moveYellow] = useState(false);
  const [signal, changeSignal] = useState('red');

  return (
    <MoveContext.Provider value={
        { 
          red,
          moveRed,
          blue,
          moveBlue,
          yellow,
          moveYellow,
          signal,
          changeSignal
        }
      }
    >
      {children}
    </MoveContext.Provider>
  ); 
}

export default MoveProvider;
