import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function VideoTabel() {

  const videoData = [
    { title: "그림 맞추기 하자", date: "24.11.12", duration: "00:27:12" },
    { title: "ㄴㄴ", date: "24.11.13", duration: "00:30:45" },
    { title: "오늘은 캐치마인드", date: "24.11.14", duration: "00:25:38" },
    { title: "그림 맞추기 하자", date: "24.11.12", duration: "00:27:12" },
    { title: "ㄴㄴ", date: "24.11.13", duration: "00:30:45" },
    { title: "오늘은 캐치마인드", date: "24.11.14", duration: "00:25:38" },
  ];

  return ( 
    <div className="flex flex-col gap-3 w-full">
      {videoData.map((video, index) => (
        <div key={index} className="flex w-full">
          <div className="relative min-w-36 aspect-[16/9] bg-gray-200 rounded-md cursor-pointer">
            <div className="absolute bottom-2 right-2 bg-neutral-950 bg-opacity-50 text-white text-xs px-1 py-0.5 rounded">{video.duration}</div>
          </div>
          <div className="px-2 w-full">
            <div className="flex justify-between items-center">
              <div className="">{video.title}</div>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <div className="text-sm text-gray-700">{video.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoTabel;
