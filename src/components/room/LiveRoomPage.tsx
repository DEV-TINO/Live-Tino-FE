import { useEffect } from "react";
import useBaseModal from "../../stores/baseModal";
import ChatBox from "./ChatBox";
import VideoArea from "./VideoArea";
import DrawingTool from "./DrawingTool";
import ToolBox from "./ToolBox";

const LiveRoomPage = () => {
  const { openModal } = useBaseModal();

  const handlePopState = () => {
    openModal("exit");
  };

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  });

  return (
    <div className="grid grid-cols-[minmax(24px,_1fr)_minmax(512px,992px)_24px_320px_minmax(24px,_1fr)]">
      <div></div>
      <div className="relative mb-4">
        <VideoArea />
        <div className="absolute bottom-2 w-full">
          <ToolBox />
        </div>
      </div>
      <div></div>
      <div className="row-span-2">
        <ChatBox />
      </div>
      <div></div>
      <div></div>
      <DrawingTool />
    </div>
  );
};

export default LiveRoomPage;