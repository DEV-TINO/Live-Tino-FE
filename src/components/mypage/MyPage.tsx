import React from "react";
import ProfileTab from "./ProfileTab";
import VideoTable from "./VideoTable";
import Pagination from "./Pagination";

const MyPage = () => {
  const itemsPerPage = 6;
  return (
    <div className="grid grid-cols-[minmax(24px,_1fr)_minmax(100px,150px)_36px_minmax(400px,_3.5fr)_minmax(24px,_1fr)]">
      <div className="col-start-2 row-start-2">
        <ProfileTab />
      </div>
      <form className="col-start-4 w-64 ml-auto mb-8 mt-2">
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
      <div className="col-start-4 row-start-2 flex h-[600px] justify-between flex-col">
        <VideoTable />
        <div className="w-full flex justify-center">
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </div>
  );
};

export default MyPage;