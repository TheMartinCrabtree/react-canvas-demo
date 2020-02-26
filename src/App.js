import React from 'react';
import './App.css';

function App() {
  return (
    <main className="App-main" >

      <canvas className="App-canvas"
        width={window.innerWidth * .5}
        height={window.innerHeight * .5}
        onClick={
          (event)=>{alert("You have clicked" + event.clientX + event.clientY)}
        } />

    </main>
  );
}

export default App;
