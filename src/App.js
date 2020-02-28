import React, {useRef, useState, useEffect} from 'react';
import './App.css';


// Path2D SVG for a heart
const heartSVG = "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
const SVG_PATH = new Path2D(heartSVG);


// Scaling Constants for Canvas
const SCALE = 0.3;
const OFFSET = 80;
const canvasWidth = window.innerWidth * .5;
const canvasHeight = window.innerHeight * .5;

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
  // useRef creates an JS object that can be manipulated and is not recreated each render
  const canvasRef = useRef(null);

  const [coordinates, setCoordinates] = useState([]);

  useEffect(()=>{
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext('2d');
    ctx.clearRect( 0,0, canvasHeight, canvasWidth );

    // draw all coordinates held in state
    coordinates.forEach((coordinate)=>{draw(ctx, coordinate)});
  })

  const handleCanvasClick=(event)=>{
    // on each click get current mouse location 
    const currentCoord = { x: event.clientX, y: event.clientY };
    // add the newest mouse location to an array in state 
    setCoordinates([...coordinates, currentCoord])
    console.log("Coordinates", coordinates);
  };


  return (
    <main className="App-main" >

      <canvas 
        className="App-canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick} />

    </main>
  );
};

export default App;
