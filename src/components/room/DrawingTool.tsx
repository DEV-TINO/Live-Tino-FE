import React from "react";

function DrawingTool() {

  return (  
    <div className="rounded-xl border grid grid-cols-[24px_240px_24px_1fr_24px] xl:grid-cols-[24px_327px_24px_1fr_24px] 2xl:grid-cols-[24px_420px_24px_1fr_24px] items-center py-4 text-xs lg:text-sm">
      <div></div>
      <div className="flex flex-col gap-2">
        <div>색상</div>
        <div className="rounded-xl grid grid-cols-6 gap-2 xl:gap-3 2xl:gap-1 xl:grid-cols-8 2xl:grid-cols-12">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="w-8 h-8 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
      <div></div>
      <div className="grid grid-rows-[1fr_8px_2fr] lg:grid-rows-[1fr_16px_1fr] h-full xl:grid-rows-[1fr_8px_1fr] 2xl:grid-cols-[1fr_24px_2fr] 2xl:grid-rows-1">
        <div className="grid grid-cols-[1fr_200px_1fr] lg:grid-cols-[1fr_334px_1fr] xl:grid-cols-[1fr_280px_1fr]">
          <div></div>
          <div className="flex flex-col gap-2">
            <div>도구</div>
            <div className="h-full grid grid-cols-5 gap-2 lg:gap-4 2xl:gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="bg-gray-100 rounded 2xl:h-12 hover:bg-gray-200"></div>
              ))}
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
        <div className="items-center w-full h-full flex flex-col lg:flex-row gap-2 lg:gap-4 2xl:gap-6">
          <div className="w-[200px] lg:w-full h-full flex flex-col gap-2">
            <div>굵기</div>
            <div className="h-full bg-gray-100 rounded 2xl:h-12"></div>
          </div>
          <div className="w-[200px] lg:w-full h-full flex flex-col gap-2">
            <div>투명도</div>
            <div className="h-full bg-gray-100 rounded 2xl:h-12"></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DrawingTool;
