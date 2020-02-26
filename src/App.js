import React, {useRef, useState, useEffect} from 'react';
import './App.css';

// Path2D SVG of a rectangle
const drawRect = new Path2D();
drawRect.rect(10, 10, 100,100);
const SCALE = 0.3;
const OFFSET = 80;

function draw(ctx, location){
  console.log("attempting to draw")
  ctx.fillStyle = 'white';
  ctx.shadowColor = 'blue';
  ctx.shadowBlur = 15;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.fill(drawRect);
  ctx.restore();  //method of the Canvas 2D API restores the most recently saved canvas state by popping the top entry in the drawing state stack. If there is no saved state, this method does nothing
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
