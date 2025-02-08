import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import useVideoStore from "../../stores/videoStore";
import { useNavigate } from "react-router-dom";
import useBaseModal from "../../stores/baseModal";
import SelectionModal from "./SelectionModal";

const PlayVideoTable = ({ videoId }: { videoId: number }) => {
  const { videos, currentPage, itemsPerPage, searchQuery, selectedVideoId, setSelectedVideoId } = useVideoStore();
  const { openModal, isModalOpen, modalType } = useBaseModal();
  const navigate = useNavigate();
  const startIndex = (currentPage - 1) * itemsPerPage;

  const filteredVideos = videos.filter((video) => video.title.includes(searchQuery));
  const currentVideos = filteredVideos.slice(startIndex, startIndex + itemsPerPage);

  const handleClickVideo = (videoId: number) => {
    navigate(`/video/${videoId}`);
  };

  const handleClickSelection = (event: React.MouseEvent, id: number) => {
    setSelectedVideoId(id);
    event.stopPropagation();
    openModal("selection");
  };

  const getVideoTitleClass = (id: number) => {
    if (id === videoId) return "text-blue-600 font-semibold";
    return "text-black";
  };

  return (
    <div className="flex flex-col gap-3 w-full h-full">
      {currentVideos.map((video) => (
        <div
          key={video.id}
          onClick={() => handleClickVideo(video.id)}
          className="flex w-full cursor-pointer"
        >
          <div className="relative min-w-36 aspect-[16/9] bg-gray-200 rounded-md">
            <div className="absolute bottom-2 right-2 bg-neutral-950 bg-opacity-50 text-white text-xs px-1 py-0.5 rounded">
              {video.duration}
            </div>
          </div>
          <div className="pl-2 w-44 relative">
            <div className="flex justify-between items-center">
              <div className={`${getVideoTitleClass(video.id)} truncate`}>{video.title}</div>
              <div onClick={(event) => handleClickSelection(event, video.id)} className="hover:bg-gray-100 min-w-6 min-h-6 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
              {modalType === "selection" && isModalOpen && video.id === selectedVideoId && (
                <div className="absolute top-[-10px] right-[-6px] z-50">
                  <SelectionModal />
                </div>
              )}
            </div>
            <div className="text-sm text-gray-700">{video.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayVideoTable;