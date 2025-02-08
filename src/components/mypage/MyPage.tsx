import { useEffect } from "react";
import ProfileTab from "./ProfileTab";
import VideoTable from "./VideoTable";
import Pagination from "./Pagination";
import useBaseModal from "../../stores/baseModal";
import useVideoStore from "../../stores/videoStore";
import IconSearch from "../../icons/IconSearch";

const MyPage = () => {
  const { closeModal } = useBaseModal();
  const { videos, currentPage, itemsPerPage, searchQuery, setSearchQuery } = useVideoStore();

  const filteredVideos = videos.filter((video) => video.title.includes(searchQuery));

  const totalVideos = filteredVideos.length;
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalVideos);

  const handlePopState = () => {
    closeModal();
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="grid grid-cols-[minmax(24px,_1fr)_minmax(100px,150px)_36px_minmax(400px,_3.5fr)_minmax(24px,_1fr)]">
      <div className="col-start-2 row-start-2">
        <ProfileTab />
      </div>
      <form className="col-start-4 w-64 ml-auto mb-8 mt-2" onSubmit={(e) => e.preventDefault()}>
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
      <div className="col-start-4 row-start-2 flex h-[600px] justify-between flex-col">
        <VideoTable />
        <div className="w-full flex justify-between items-center">
          {totalVideos > itemsPerPage && (
            <div className="text-gray-500 w-40">
              Showing <b>{startIndex}-{endIndex}</b> of <b>{totalVideos}</b>
            </div>
          )}
          <Pagination/>
          <div className="w-40"></div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;