import { useParams } from "react-router-dom";
import useVideoStore from "../../stores/videoStore";
import VideoArea from "./VideoArea";
import PlayVideoTable from "./PlayVideoTable";
import Pagination from "./Pagination";

const PlayPage = () => {
  const { id } = useParams<{ id: string }>();
  const { videos } = useVideoStore(); //이렇게 하면 모든 비디오에서 아이디를 하나씩 비교해야하는데...
  const video = videos.find((video) => video.id === Number(id));

  if (!video) {
    return <div>비디오 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="relative grid grid-cols-[minmax(24px,_1fr)_minmax(512px,992px)_24px_320px_minmax(24px,_1fr)]">
      <div></div>
      <div className="flex flex-col gap-2">
        <VideoArea title={video.title} />
        <div className="text-2xl font-semibold py-4 pr-2 flex flex-col gap-1">
          <div>{video.title}</div>
          <div className="flex gap-4 text-gray-600">
            <div className="text-base flex gap-2">
              <div>방송 일자</div>
              <div className="font-normal">{video.date}</div>
            </div>
            <div className="text-base flex gap-2">
              <div>영상 길이</div>
              <div className="font-normal">{video.duration}</div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="flex flex-col items-center h-[620px] justify-between">
        <PlayVideoTable itemsPerPage={6} />
        <Pagination itemsPerPage={6} />
      </div>
    </div>
  );
};

export default PlayPage;