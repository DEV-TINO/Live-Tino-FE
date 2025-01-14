import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faEraser, faFill, faPencil } from "@fortawesome/free-solid-svg-icons";
import useDrawingStore from "../../stores/drawingStore";

function DrawingTool() {
  const icons = [
    { icon: faPencil, label: "Pencil" },
    { icon: faEraser, label: "Eraser" },
    { icon: faArrowLeft, label: "Undo" },
    { icon: faArrowRight, label: "Redo" },
  ];

  const { tool, setTool } = useDrawingStore();

  const getButtonClass = (value: string) => {
    return tool === value ? "text-gray-950" : "text-gray-400 hover:bg-gray-100";
  };

  const isEraser = (value: string) => {
    if (value === "Eraser" || value === "Pencil") {
      setTool(value);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="rounded bg-white flex gap-2 p-2 z-20">
        {icons.map(({ icon, label }, index) => (
          <div key={index}className={`rounded h-8 w-8 flex items-center justify-center cursor-pointer ${getButtonClass(label)}`} title={label} onClick={() => isEraser(label)}>
            <FontAwesomeIcon icon={icon} size="lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrawingTool;
