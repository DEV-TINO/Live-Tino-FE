import React from "react";
import ChatBox from "./ChatBox";
import VideoArea from "./VideoArea";
import DrawingTool from "./DrawingTool";

function LiveRoomPage() {

  return (
    <div>
      <div className="p-4"></div>
      <div className="grid grid-cols-[minmax(24px,_1fr)_minmax(512px,992px)_24px_320px_minmax(24px,_1fr)]">
        <div></div>
        <VideoArea />
        <div></div>
        <div className="row-span-2 2xl:row-span-1">
          <ChatBox />
        </div>
        <div></div>
        <div></div>
        <div className="pt-6 2xl:col-span-3">
          <DrawingTool />
        </div>
      </div>
    </div>
  );
}

export default LiveRoomPage;
