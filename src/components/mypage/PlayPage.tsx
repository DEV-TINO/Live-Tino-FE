import React from "react";
import VideoArea from "./VideoArea";
import PlayVideoTable from "./PlayVideoTable"
import Pagination from "./Pagination";

function PlayPage() {

  return (
    <div className="grid grid-cols-[minmax(24px,_1fr)_minmax(512px,992px)_24px_320px_minmax(24px,_1fr)]">
      <div></div>
      <div className="flex flex-col gap-2">
        <VideoArea />
        <div className="text-2xl font-semibold py-4 pr-2 flex flex-col gap-1">
          <div>그림 맞추기 하자</div>
          <div className="flex gap-4 text-gray-600">
            <div className="text-base flex gap-2">
              <div>방송 일자</div>
              <div className="font-normal">2024.3.22</div>
            </div>
            <div className="text-base flex gap-2">
              <div>영상 길이</div>
              <div className="font-normal">00:25:38</div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="flex flex-col gap-8 items-center">
        <PlayVideoTable />
        <Pagination />
      </div>
    </div>
  );
}

export default PlayPage;