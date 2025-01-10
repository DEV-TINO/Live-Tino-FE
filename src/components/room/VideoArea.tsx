import React, { useRef, useState, useEffect } from "react";
import { useDrawingStore } from "../../stores/drawingStore";
import { useLiveRoomStore } from "../../stores/liveRoomStore";

interface DrawPoint {
  x: number;
  y: number;
  isDrawing: boolean;
  color: string;
  thickness: number;
  transparency: number;
}

function VideoArea() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audionRef = useRef<HTMLVideoElement | null>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [drawPoints, setDrawPoints] = useState<DrawPoint[]>([]);

  const originalWidth = 992;
  const originalHeight = 558;

  const { mode } = useLiveRoomStore();
  const { color, thickness, transparency, tool } = useDrawingStore();

  useEffect(() => { // 화면 받아오기
    if (mode === "camera") {
      navigator.mediaDevices
        .getUserMedia({ 
          video: true, 
          audio: true 
        })
        .then((stream) => {
          videoRef.current!.srcObject = stream;
          audionRef.current!.srcObject = stream;
        })
        .catch((err) => 
          console.error("Failed to access camera: ", err)
      );
    }
    if (mode === "screen") {
      navigator.mediaDevices
        .getDisplayMedia({ 
          video: true, 
        audio: true 
        })
        .then((stream) => {
          videoRef.current!.srcObject = stream;
          audionRef.current!.srcObject = stream;
        })
        .catch((err) =>
          console.error("Failed to access screen share: ", err)
      );
    }
  }, [mode]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect(); //캔버스 크기

    const newPoint = {
      x: (e.clientX - rect.left) * (originalWidth / rect.width),
      y: (e.clientY - rect.top) * (originalHeight / rect.height),
      isDrawing: false,
      color,
      thickness,
      transparency,
    };

    setDrawPoints((prev) => [...prev, newPoint]);
    console.log(drawPoints);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !isDrawing) return;
  
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (originalWidth / rect.width);
    const y = (e.clientY - rect.top) * (originalHeight / rect.height);
  
    if (tool === "Eraser") {
      setDrawPoints((prev) =>
        prev.map((point) => {
          const distance = Math.hypot(point.x - x, point.y - y);  //유클리드
          if (distance <= thickness) {
            return { ...point, isDrawing: false };
          }
          return point;
        })
      );
    } else {
      const context = canvas.getContext("2d");
      if (!context) return;
  
      const newPoint: DrawPoint = {
        x,
        y,
        isDrawing: true,
        color,
        thickness,
        transparency,
      };
  
      const prevPoint = drawPoints[drawPoints.length - 1];
      if (prevPoint) {
        context.beginPath();
        context.moveTo(prevPoint.x, prevPoint.y);
        context.lineTo(newPoint.x, newPoint.y);
        context.strokeStyle = newPoint.color;
        context.lineWidth = newPoint.thickness;
        context.globalAlpha = newPoint.transparency / 100;
        context.stroke();
      }
  
      setDrawPoints((prev) => [...prev, newPoint]);
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const canvasWidth = containerRef.current?.offsetWidth || originalWidth;
    const canvasHeight = containerRef.current?.offsetHeight || originalHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    drawPoints.forEach((point, index) => {
      if (point.isDrawing && index > 0) {
        const prevPoint = drawPoints[index - 1];
        const scaleX = canvasWidth / originalWidth;
        const scaleY = canvasHeight / originalHeight;

        const adjustedPrevPoint = {
          x: prevPoint.x * scaleX,
          y: prevPoint.y * scaleY,
        };
        const adjustedPoint = {
          x: point.x * scaleX,
          y: point.y * scaleY,
        };

        context.beginPath();
        context.moveTo(adjustedPrevPoint.x, adjustedPrevPoint.y);
        context.lineTo(adjustedPoint.x, adjustedPoint.y);
        context.strokeStyle = point.color;
        context.lineWidth = point.thickness;
        context.globalAlpha = point.transparency / 100;
        context.stroke();
      }
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      redrawCanvas();
    });

    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [drawPoints]);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b rounded-t-md from-neutral-950 to-transparent px-4 py-2 text-white font-semibold text-lg z-10">
        그림 맞추기 하자
      </div>
      <div ref={containerRef} className="aspect-[16/9] relative">
        {mode === "camera" && (
          <video
            ref={videoRef}
            autoPlay
            muted
            className="absolute w-full h-full object-cover z-0 rounded-md"
          />
        )}
        {mode === "screen" && (
          <video
            ref={videoRef}
            autoPlay
            className="absolute w-full h-full object-cover z-0 rounded-md"
          />
        )}
        {mode === "board" && (
          <div className="absolute w-full h-full bg-gray-50 z-0 rounded-md"></div>
        )}
        <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, zIndex: 5, border: "1px solid transparent" }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>
    </div>
  );
}

export default VideoArea;