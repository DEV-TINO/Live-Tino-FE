import React from "react";

function DrawingTool() {
  return (  
    <div className="rounded-xl border grid grid-cols-[24px_220px_24px_1fr_24px] xl:grid-cols-[24px_290px_24px_1fr_24px] 2xl:grid-cols-[24px_440px_24px_1fr_24px] items-center py-4">
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
      <div className="flex flex-col xl:flex-row gap-2 xl:gap-6 w-full items-center">
        <div className="flex flex-col gap-2 w-full max-w-64">
          <div>굵기</div>
          <div className="bg-gray-200 rounded w-full h-12"></div>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-64">
          <div>투명도</div>
          <div className="bg-gray-200 rounded w-full h-12"></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DrawingTool;
