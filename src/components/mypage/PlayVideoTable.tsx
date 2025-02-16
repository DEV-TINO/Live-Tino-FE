import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import useVideoStore from "../../stores/videoStore";
import { useNavigate } from "react-router-dom";
import useBaseModal from "../../stores/baseModal";
import SelectionModal from "./SelectionModal";
import useUserStore from "../../stores/userStore";

const PlayVideoTable = ({ videoId }: { videoId: string }) => {
  const { videos, currentPage, itemsPerPage, searchQuery, selectedVideoId, setSelectedVideoId, fetchVideos } = useVideoStore();
  const { openModal, isModalOpen, modalType } = useBaseModal();
  const { userId } = useUserStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchVideos(userId);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const filteredVideos = videos.filter((video) => video.title.includes(searchQuery));
  const currentVideos = filteredVideos.slice(startIndex, startIndex + itemsPerPage);

  const handleClickVideo = (videoId: string) => {
    navigate(`/video/${videoId}`);
  };

  const handleClickSelection = (event: React.MouseEvent, id: string) => {
    setSelectedVideoId(id);
    event.stopPropagation();
    openModal("selection");
  };

  const getVideoTitleClass = (id: string) => {
    return id === videoId ? "text-blue-600 font-semibold" : "text-black";
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
            {video.thumbnail ? (
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover rounded-md" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">No Thumbnail</div>
            )}
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
                  <SelectionModal videoId={video.id} />
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