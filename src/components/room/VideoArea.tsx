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

const useDrawingHandlers = (originalWidth: number, originalHeight: number) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawPoints, setDrawPoints] = useState<DrawPoint[]>([]);
  const { color, thickness, transparency, tool } = useDrawingStore();

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    const newPoint = {
      x: (e.clientX - rect.left) * (originalWidth / rect.width),
      y: (e.clientY - rect.top) * (originalHeight / rect.height),
      isDrawing: false,
      color,
      thickness,
      transparency,
    };

    setDrawPoints((prev) => [...prev, newPoint]);
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
          const distance = Math.hypot(point.x - x, point.y - y);
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

  return { canvasRef, drawPoints, setDrawPoints, startDrawing, draw, stopDrawing };
};

const useMediaStream = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLVideoElement | null>(null);
  const { mode } = useLiveRoomStore();

  useEffect(() => {
    if (mode === "camera") {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) videoRef.current.srcObject = stream;
          if (audioRef.current) audioRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Failed to access camera: ", err));
    } else if (mode === "screen") {
      navigator.mediaDevices
        .getDisplayMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) videoRef.current.srcObject = stream;
          if (audioRef.current) audioRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Failed to access screen share: ", err));
    } else if (mode === "board") {
      if (videoRef.current) videoRef.current.srcObject = null;
      if (audioRef.current) audioRef.current.srcObject = null;
    }
  }, [mode]);

  return { videoRef, audioRef };
};

const VideoArea = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const originalWidth = 992;
  const originalHeight = 558;

  const { videoRef } = useMediaStream();
  const {
    canvasRef,
    drawPoints,
    startDrawing,
    draw,
    stopDrawing,
  } = useDrawingHandlers(originalWidth, originalHeight);

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
      <div ref={containerRef} className="aspect-[16/9] relative bg-gray-50">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="absolute w-full h-full object-cover z-0 rounded-md"
        />
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", top: 0, left: 0, zIndex: 5, border: "1px solid transparent" }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>
    </div>
  );
};

export default VideoArea;