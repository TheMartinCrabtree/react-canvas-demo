import React, {useRef, useState, useEffect} from 'react';
import './App.css';


// Path2D SVG for a heart
const heartSVG = "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
const SVG_PATH = new Path2D(heartSVG);



// Scaling Constants for Canvas
const SCALE = 0.3;
const OFFSET = 80;

function draw(ctx, location){
  console.log("attempting to draw")
  ctx.fillStyle = 'red';
  ctx.shadowColor = 'blue';
  ctx.shadowBlur = 15;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.rotate(225 * Math.PI / 180);
  ctx.fill(SVG_PATH);
  // .restore(): Canvas 2D API restores the most recently saved canvas state
  ctx.restore();  
};


function App() {
  const canvasRef = useRef(null);

  const handleCanvasClick=(event)=>{
    // alert(`You have clicked on mouse coordinates: X: ${event.clientX} Y: ${event.clientY}`);
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext('2d');
    draw(ctx, {x: event.clientX, y: event.clientY});

  };


  return (
    <main className="App-main" >

      <canvas 
        className="App-canvas"
        ref={canvasRef}
        width={window.innerWidth * .5}
        height={window.innerHeight * .5}
        onClick={handleCanvasClick} />

    </main>
  );
};

export default App;
