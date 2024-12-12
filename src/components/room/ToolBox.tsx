import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faEraser, faFill, faPencil } from "@fortawesome/free-solid-svg-icons";


function DrawingTool() {
  const icons = [
    { icon: faPencil, label: "Pencil" },
    { icon: faEraser, label: "Eraser" },
    { icon: faFill, label: "Fill" },
    { icon: faArrowLeft, label: "Undo" },
    { icon: faArrowRight, label: "Redo" },
  ];
  
  return (
    <div className="w-full flex justify-center">
      <div className="rounded bg-white flex gap-2 p-2">
        {icons.map(({ icon, label }, index) => (
          <div key={index} className="rounded hover:bg-blue-400 hover:text-white h-8 w-8 flex items-center justify-center" title={label}>
            <FontAwesomeIcon icon={icon} size="lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrawingTool;
