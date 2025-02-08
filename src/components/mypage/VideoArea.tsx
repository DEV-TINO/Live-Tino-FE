import React from "react";
import useBaseModal from "../../stores/baseModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import SelectionModal from "./SelectionModal";
import useVideoStore from "../../stores/videoStore";

interface IVideoAreaProps {
  title: string;
}

const VIDEOAREA = -1;

const VideoArea: React.FC<IVideoAreaProps> = ({ title }) => {
  const { selectedVideoId, setSelectedVideoId } = useVideoStore();
  const { openModal, isModalOpen, modalType } = useBaseModal();

  const handleClickSelection = () => {
    setSelectedVideoId(VIDEOAREA);
    openModal("selection");
  };

  const getOpacity = () => {
    return (isModalOpen && selectedVideoId === VIDEOAREA) ? "opacity-60" : "opacity-0";
  };

  return (
    <div className="relative group z-20">
      <div className={`flex text-white justify-between text-lg items-center ${getOpacity()} group-hover:opacity-60 absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-neutral-950 to-transparent px-4 rounded-t-md`}>
        {modalType === "selection" && isModalOpen && selectedVideoId === VIDEOAREA && <SelectionModal />}
        <div className="font-semibold">{title}</div>
        <div onClick={handleClickSelection} className="h-6 w-6 flex justify-center items-center hover:bg-black/10 rounded-full">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
      </div>
      <div className="bg-gray-200 rounded-md aspect-[16/9]"></div>
    </div>
  );
};

export default VideoArea;