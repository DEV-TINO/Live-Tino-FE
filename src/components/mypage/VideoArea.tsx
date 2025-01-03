import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faExpand, faPlay, faVolumeLow } from "@fortawesome/free-solid-svg-icons";

function VideoArea() {
  const [value, setValue] = useState(0);

  return (
    <div className="relative group">
      <div className="flex text-white justify-between text-lg items-center opacity-0 group-hover:opacity-60 absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-neutral-950 to-transparent px-4">
        <div className="font-semibold">그림 맞추기 하자</div>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
      <div className="flex flex-col justify-between opacity-0 group-hover:opacity-60 absolute bottom-0 left-0 w-full h-14 bg-gradient-to-b from-transparent to-neutral-950 px-2">
      <div className="relative w-full h-1 bg-gray-300 rounded-full">
        <div className="absolute h-1 bg-red-500 rounded-full" style={{ width: `${value}%` }}></div>
        <input type="range" min="0" max="100" value={value} className="absolute w-full h-1 opacity-0 cursor-pointer" onInput={(e) => setValue(Number((e.target as HTMLInputElement).value))} />
        <div className="absolute top-[-4px] w-3 h-3 bg-red-500 rounded-full" style={{ left: `${value}%` }}></div>
      </div>
        <div className="flex text-white justify-between items-center w-full px-4 pb-5">
          <div className="flex gap-4 items-center">
            <FontAwesomeIcon icon={faPlay} />
            <FontAwesomeIcon icon={faVolumeLow} />
            <div className="text-sm">00:00:00 / 00:25:38</div>
          </div>
          <FontAwesomeIcon icon={faExpand} />
        </div>
      </div>
      <div className="bg-gray-200 aspect-[16/9]"></div>
    </div>
  );
}

export default VideoArea;
