"use client";

import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";

// const TracingComponent = ({ letter, width, height, color }) => {
//   const canvasRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");

//     // Set up canvas properties
//     canvas.width = width;
//     canvas.height = height;
//     context.lineWidth = 6;
//     context.lineCap = "round";
//     context.strokeStyle = color;
//   }, [letter, width, height]);

//   const startDrawing = () => {
//     setIsDrawing(true);
//   };

//   const endDrawing = () => {
//     setIsDrawing(false);
//   };

//   const draw = (e) => {
//     if (!isDrawing) return;

//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");
//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     context.lineTo(x, y);
//     context.stroke();
//     context.beginPath(); // Start a new path
//   };

//   const clearCanvas = () => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");
//     context.clearRect(0, 0, canvas.width, canvas.height);
//   };

//   return (
//     <div className="canvas">
//       <canvas
//         ref={canvasRef}
//         onMouseDown={startDrawing}
//         onMouseUp={endDrawing}
//         onMouseMove={draw}
//       ></canvas>
//       <Image
//         src={`/assets/images/english/phonics/tracing/${letter}.png`}
//         alt=""
//         width={100}
//         height={100}
//       />
//       <button onClick={clearCanvas}>Clear Canvas</button>
//     </div>
//   );
// };

// export default TracingComponent;

const TracingComponent = ({ letter, width, height, color }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set up canvas properties
    canvas.width = width;
    canvas.height = height;
    context.lineWidth = 6;
    context.lineCap = "round";
    context.strokeStyle = color;
  }, [letter, width, height]);

  const startDrawing = (e) => {
    e.preventDefault();
    setIsDrawing(true);
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Adjust for touch events
    const rect = canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;

    context.lineTo(x, y);
    context.stroke();
    context.beginPath(); // Start a new path
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="canvas">
      <canvas
        ref={canvasRef}
        onTouchStart={startDrawing}
        onTouchEnd={endDrawing}
        onTouchMove={draw}
      ></canvas>
      <Image
        src={`/assets/images/english/phonics/tracing/${letter}.png`}
        alt=""
        width={100}
        height={100}
      />
      <button onClick={clearCanvas}>Clear Canvas</button>
    </div>
  );
};

export default TracingComponent;
