import React from 'react';
import './App.css';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import MoveProvider from './context/moveProvider';

function App() {
  return (
    <MoveProvider>
      <Cars />
      <TrafficSignal />
    </MoveProvider>
  );
}

export default App;
