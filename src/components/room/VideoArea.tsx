import React from "react";

function VideoArea() {

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-neutral-950 to-transparent px-4 py-2 text-white font-semibold text-lg">그림 맞추기 하자</div>
      <div className="bg-gray-200 aspect-[16/9]"></div>
    </div>
  );
}

export default VideoArea;
