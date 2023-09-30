"use client";

import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";

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
    <div
      className="canvas"
      style={{
        borderColor: color,
      }}
    >
      <canvas
        ref={canvasRef}
        onTouchStart={startDrawing}
        onTouchEnd={endDrawing}
        onTouchMove={draw}
        className="touch-scroll-lock"
      ></canvas>
      <Image
        src={`/assets/images/english/phonics/tracing/${letter}.png`}
        alt=""
        width={100}
        height={100}
      />
      <button
        onClick={clearCanvas}
        className="clear-canvas__btn"
        style={{
          backgroundColor: color,
        }}
      >
        Clear Canvas
      </button>
    </div>
  );
};

export default TracingComponent;
