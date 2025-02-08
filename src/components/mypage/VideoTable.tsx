import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import useVideoStore from "../../stores/videoStore";
import useBaseModal from "../../stores/baseModal";
import SelectionModal from "./SelectionModal";

type TVideo = {
  id: number;
  title: string;
  date: string;
  duration: string;
};

const VideoTable = () => {
  const navigate = useNavigate();
  const { videos, currentPage, itemsPerPage, selectedVideoId, setSelectedVideoId } = useVideoStore();
  const { openModal,modalType, isModalOpen } = useBaseModal();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentVideos = videos.slice(startIndex, startIndex + itemsPerPage);

  const handleClickPlay = (video: TVideo) => {
    navigate(`/video/${video.id}`);
  };

  const handleClickSelection = (event: React.MouseEvent, id: number) => {
    setSelectedVideoId(id);
    event.stopPropagation();
    openModal("selection");
  };

  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
      {currentVideos.map((video, index) => (
        <div key={index} onClick={() => handleClickPlay(video)} className="flex flex-col mb-3">
          <div className="relative w-full aspect-[16/9] bg-gray-200 rounded-md cursor-pointer">
            <div className="absolute bottom-2 right-2 bg-neutral-950 bg-opacity-50 text-white text-xs px-1 py-0.5 rounded">
              {video.duration}
            </div>
          </div>
          <div className="flex w-full justify-between pt-2 items-center gap-4 relative">
            <div className="pl-0.5 truncate">{video.title}</div>
            <div onClick={(event) => handleClickSelection(event, video.id)} className="hover:bg-gray-100 min-w-6 min-h-6 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            {modalType === "selection" && isModalOpen && video.id === selectedVideoId && (
                <div className="absolute top-[-8px] right-[-10px] z-50">
                  <SelectionModal />
                </div>
              )}
          </div>
          <div className="text-sm pl-0.5 text-gray-700">{video.date}</div>
        </div>
      ))}
    </div>
  );
};

export default VideoTable;