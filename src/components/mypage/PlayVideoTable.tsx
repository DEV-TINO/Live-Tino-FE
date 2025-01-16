import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import useVideoStore from "../../stores/videoStore";
import { useNavigate } from "react-router-dom";

const PlayVideoTable = ({ videoId }: { videoId: number }) => {
  const { videos, currentPage, itemsPerPage } = useVideoStore();
  const navigate = useNavigate();
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentVideos = videos.slice(startIndex, startIndex + itemsPerPage);

  const handleClickVideo = (videoId: number) => {
    navigate(`/video/${videoId}`);
  };

  const getVideoTitleClass = (id: number) => {
    if (id === videoId) return "text-blue-600 font-semibold";
    return "text-black";
  };

  return (
    <div className="flex flex-col gap-3 w-full">
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
          <div className="px-2 w-full">
            <div className="flex justify-between items-center">
              <div className={getVideoTitleClass(video.id)}>{video.title}</div>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className="text-sm text-gray-700">{video.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayVideoTable;