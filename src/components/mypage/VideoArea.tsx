import React from "react";
import useSelectionModal from "../../stores/selectionModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import SelectionModal from "./SelectionModal";

interface IVideoAreaProps {
  title: string;
}

const VideoArea: React.FC<IVideoAreaProps> = ({ title }) => {
  const { openModal, isModalOpen } = useSelectionModal();

  return (
    <div className="relative group">
      <div className="flex text-white justify-between text-lg items-center opacity-0 group-hover:opacity-60 absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-neutral-950 to-transparent px-4 rounded-t-md">
        {isModalOpen && <SelectionModal />}
        <div className="font-semibold">{title}</div>
        <FontAwesomeIcon onClick={openModal} icon={faEllipsisVertical} />
      </div>
      <div className="bg-gray-200 rounded-md aspect-[16/9]"></div>
    </div>
  );
};

export default VideoArea;