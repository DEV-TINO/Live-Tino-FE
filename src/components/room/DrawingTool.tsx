import React from "react";

function DrawingTool() {
  return (  
    <div className="rounded-xl border grid grid-cols-[24px_220px_24px_1fr_24px] xl:grid-cols-[12px_340px_12px_1fr_12px] 2xl:grid-cols-[24px_340px_24px_1fr_24px] items-center py-4">
      <div></div>
      <div className="flex flex-col gap-2">
        <div>색상</div>
        <div className="rounded-xl grid grid-cols-6 gap-1 xl:grid-cols-12">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="h-8 w-8 xl:w-6 xl:h-6 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
      <div></div>
      <div className="flex flex-col xl:flex-row gap-2 xl:gap-3 2xl:gap-6 w-full justify-center items-center">
        <div className="flex flex-col gap-2 w-full max-w-64">
          <div>굵기</div>
          <div className="bg-gray-100 rounded w-full h-[50px] xl:h-[52px] flex justify-between p-4 items-center">
            {Array.from({ length: 5 }).map((_, index) => {
              const size = (index + 1) * 4;
              return (
                <div key={index} className="w-8 h-8 border border-gray-300 hover:border-gray-400 rounded-full flex items-center justify-center">
                  <div className="bg-gray-300 rounded-full" style={{ width: size, height: size }}></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-64">
          <div>투명도</div>
          <div className="bg-gray-100 rounded w-full h-[50px] xl:h-[52px] flex items-center gap-2 p-4 justify-center">
            <div className="min-w-8 h-8 border border-gray-300 rounded-full"></div>
            <input type="range" min="0" max="100" className="w-full h-1.5 appearance-none bg-gray-300 rounded-full accent-gray-400"></input>
            <div className="min-w-8 h-8 border border-gray-300 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DrawingTool;
