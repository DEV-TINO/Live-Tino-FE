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
    <div className="rounded-xl border grid grid-cols-[24px_212px_24px_1fr_24px] xl:grid-cols-[24px_290px_24px_1fr_24px] 2xl:grid-cols-[24px_420px_24px_1fr_24px] items-center py-4 text-xs lg:text-sm">
      <div></div>
      <div className="flex flex-col gap-2">
        <div>색상</div>
        <div className="rounded-xl grid grid-cols-6 gap-1 xl:grid-cols-8 2xl:grid-cols-12">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="w-8 h-8 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
      <div></div>
      <div className="grid grid-rows-[1fr_8px_2fr] lg:grid-rows-[1fr_16px_1fr] h-full xl:grid-rows-[1fr_8px_1fr] 2xl:grid-cols-[1fr_24px_2fr] 2xl:grid-rows-1">
        <div className="grid grid-cols-[1fr_200px_1fr] lg:grid-cols-[1fr_280px_1fr] xl:grid-cols-[1fr_200px_1fr] 2xl:grid-cols-[1fr_280px_1fr]">
          <div></div>
          <div className="flex flex-col gap-2">
            <div>도구</div>
            <div className="h-full grid grid-cols-5 gap-3.5 lg:gap-2 2xl:items-center">
              {icons.map(({ icon, label }, index) => (
                <div key={index} className="bg-gray-100 rounded 2xl:h-12 hover:bg-gray-200 flex items-center justify-center" title={label}>
                  <FontAwesomeIcon icon={icon} size="lg" />
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
        <div className="items-center w-full h-full flex flex-col lg:flex-row gap-2 lg:gap-4 2xl:gap-6">
          <div className="w-[200px] lg:w-full h-full flex flex-col gap-2">
            <div>굵기</div>
            <div className="h-full grid items-center">
              <div className="h-full bg-gray-100 rounded 2xl:h-12"></div>
            </div>
          </div>
          <div className="w-[200px] lg:w-full h-full flex flex-col gap-2">
            <div>투명도</div>
            <div className="h-full grid items-center">
              <div className="h-full bg-gray-100 rounded 2xl:h-12"></div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DrawingTool;
