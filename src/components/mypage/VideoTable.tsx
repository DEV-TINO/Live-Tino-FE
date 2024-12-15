import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPlay } from "@fortawesome/free-solid-svg-icons";

function VideoTabel() {
  const navigate = useNavigate();

  const handleClickPlay = () => {
    navigate(`/video`);
  };

  const videoData = [
    { title: "그림 맞추기 하자", date: "24.11.12", duration: "00:27:12" },
    { title: "ㄴㄴ", date: "24.11.13", duration: "00:30:45" },
    { title: "오늘은 캐치마인드", date: "24.11.14", duration: "00:25:38" },
  ];

  return (
    <div className="relative overflow-x-auto border-gray-300 border rounded-lg">
      <table className="w-full text-left text-gray-500">
        <thead className="text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              제목
            </th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3 w-24"></th>
          </tr>
        </thead>
        <tbody>
          {videoData.map((video, index) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {video.title}
              </th>
              <td className="px-6 py-4 text-right">{video.date}</td>
              <td className="px-6 py-4 grid grid-cols-[32px_32px] justify-end place-items-end">
                <button onClick={handleClickPlay}>
                  <FontAwesomeIcon icon={faPlay} size="lg" />
                </button>
                <div>
                  <FontAwesomeIcon icon={faFloppyDisk} size="lg" />
                </div>
                <div className="col-span-2 pt-2">{video.duration}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VideoTabel;
