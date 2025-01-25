import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import useVideoStore from "../../stores/videoStore";

type TVideo = {
  id: number;
  title: string;
  date: string;
  duration: string;
};

const VideoTable = () => {
  const navigate = useNavigate();
  const { videos, currentPage, itemsPerPage } = useVideoStore();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentVideos = videos.slice(startIndex, startIndex + itemsPerPage);

  const handleClickPlay = (video: TVideo) => {
    navigate(`/video/${video.id}`);
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
          <div className="flex w-full justify-between pr-2 pt-2 items-center gap-4">
            <div className="pl-0.5 truncate">{video.title}</div>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
          <div className="text-sm pl-0.5 text-gray-700">{video.date}</div>
        </div>
      ))}
    </div>
  );
};

export default VideoTable;