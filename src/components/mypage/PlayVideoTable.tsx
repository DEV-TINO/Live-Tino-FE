import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function VideoTabel() {

  const videoData = [
    { title: "ㄴㄴ", date: "24.11.13" },
    { title: "오늘은 캐치마인드", date: "24.11.14" },
    { title: "ㄴㄴ", date: "24.11.13" },
    { title: "오늘은 캐치마인드", date: "24.11.14" },
    { title: "ㄴㄴ", date: "24.11.13" },
    { title: "오늘은 캐치마인드", date: "24.11.14" },
    { title: "ㄴㄴ", date: "24.11.13" },
    { title: "오늘은 캐치마인드", date: "24.11.14" },
  ];

  return (
    <div className="relative overflow-y-auto h-[558px] border-gray-300 border rounded-lg scrollbar-hide">
      <table className="w-full text-left text-gray-500">
        <thead className="text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              제목
            </th>
            <th scope="col" className="px-6 py-3 w-24"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b hover:bg-gray-50">
            <th scope="row" className="px-6 py-4 text-red-500 whitespace-nowrap">
              그림 맞추기 하자
            </th>
            <td className="px-6 py-4 flex flex-col justify-end place-items-end text-red-500">
              <button>
                <FontAwesomeIcon icon={faPlay} size="lg" />
              </button>
              <div className="col-span-2 pt-2">24.11.12</div>
            </td>
          </tr>
          {videoData.map((video, index) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {video.title}
              </th>
              <td className="px-6 py-4 flex flex-col justify-end place-items-end">
                <button>
                  <FontAwesomeIcon icon={faPlay} size="lg" />
                </button>
                <div className="col-span-2 pt-2">{video.date}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VideoTabel;
