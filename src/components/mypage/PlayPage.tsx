import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useVideoStore from "../../stores/videoStore";
import VideoArea from "./VideoArea";
import PlayVideoTable from "./PlayVideoTable";
import Pagination from "./Pagination";
import IconSearch from "../../icons/IconSearch";

const PlayPage = () => {
  const { id } = useParams<{ id: string }>();
  const { videos, searchQuery, setSearchQuery } = useVideoStore();
  const video = videos.find((video) => video.id === String(id));

  useEffect(() => {
    setSearchQuery("");
  }, []);

  if (!video) {
    return <div>Cannot find video</div>;
  }

  return (
    <div className="relative grid grid-cols-[minmax(24px,_1fr)_minmax(512px,992px)_24px_320px_minmax(24px,_1fr)]">
      <div></div>
      <div className="flex flex-col gap-2">
        <VideoArea title={video.title} videoId={video.id} />
        <div className="text-2xl font-semibold py-4 pr-2 flex flex-col gap-1">
          <div>{video.title}</div>
          <div className="flex gap-4 text-gray-600">
            <div className="text-base flex gap-2">
              <div>Date</div>
              <div className="font-normal">{video.date}</div>
            </div>
            <div className="text-base flex gap-2">
              <div>Duration</div>
              <div className="font-normal">{video.duration}</div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="flex flex-col items-center h-[672px] justify-between">
        <form className="col-start-4 w-full mb-4 ml-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IconSearch />
            </div>
            <input 
              type="search" 
              id="default-search" 
              className="block w-full p-3 ps-10 h-11 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
              placeholder="Title" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required 
            />
            <button 
              type="submit" 
              className="text-white absolute end-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium rounded-md text-sm px-4 py-1.5"
            >
              Search
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