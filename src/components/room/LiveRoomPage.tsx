import React from "react";
import ChatBox from "./ChatBox";
import VideoArea from "./VideoArea";
import DrawingTool from "./DrawingTool";
import ToolBox from "./ToolBox";

function LiveRoomPage() {

  return (
    <div>
      <div className="grid grid-cols-[minmax(24px,_1fr)_minmax(512px,992px)_24px_320px_minmax(24px,_1fr)]">
        <div></div>
        <div className="relative flex flex-col gap-4">
          <VideoArea />
          <div className="absolute top-2 w-full">
            <ToolBox />
          </div>
          <DrawingTool />
        </div>
        <div></div>
        <ChatBox />
        <div></div>
      </div>
    </div>
  );
}

export default LiveRoomPage;
