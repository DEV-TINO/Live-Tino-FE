import React from "react";
import ProfileTab from "./PorfileTab";
import VideoTable from "./VideoTable";
import Pagination from "./Pagination";

function MyPage() {

  return (
    <div className="grid grid-cols-[minmax(24px,_1fr)_minmax(100px,150px)_24px_minmax(400px,_3fr)_minmax(24px,_1fr)]">
      <div className="col-start-2 row-start-2">
        <ProfileTab />
      </div>
      <form className="col-start-4 w-72 ml-auto mb-8 mt-2">   
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="제목" required />
          <button type="submit" className="text-white absolute end-2 bottom-2 bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium rounded-md text-sm px-4 py-1.5">검색</button>
        </div>
      </form>
      <div className="col-start-4 row-start-2 flex flex-col gap-24">
        <VideoTable />
        <div className="w-full flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
