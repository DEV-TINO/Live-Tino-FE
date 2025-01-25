import { useParams } from "react-router-dom";
import useVideoStore from "../../stores/videoStore";
import VideoArea from "./VideoArea";
import PlayVideoTable from "./PlayVideoTable";
import Pagination from "./Pagination";

const PlayPage = () => {
  const { id } = useParams<{ id: string }>();
  const { videos } = useVideoStore();
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
      <div className="flex flex-col items-center h-[672px] justify-between">
        <form className="col-start-4 w-full mb-4 ml-auto">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="search" 
              id="default-search" 
              className="block w-full p-3 ps-10 h-11 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
              placeholder="제목" 
              required 
            />
            <button 
              type="submit" 
              className="text-white absolute end-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium rounded-md text-sm px-4 py-1.5"
            >
              검색
            </button>
          </div>
        </form>
        <PlayVideoTable videoId={video.id} />
        <Pagination />
      </div>
    </div>
  );
};

export default PlayPage;