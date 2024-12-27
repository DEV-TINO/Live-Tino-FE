import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

function ChatBox() {

  return (  
    <div className="w-full h-full rounded-md border flex flex-col justify-between">
      <div className="border-b flex items-center h-12 px-4 justify-between">
        <div className="font-bold">채팅</div>
        <div className="flex gap-1 items-center text-sm hover:bg-gray-100 p-1.5 rounded-md">
          <FontAwesomeIcon icon={faUserAlt} />
          <div>29</div>
        </div>
      </div>
      <div className="overflow-y-auto h-[395px] xl:h-[475px] 2xl:h-[577px] scrollbar-hide">
        <div className="text-sm py-5 px-4 flex flex-col justify-end gap-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="flex gap-2">
            <div className="text-red-500 font-bold">hmyang</div>
            <div>
              안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="border-t h-16 px-4 flex items-center text-sm">
        <div className="bg-gray-100 h-10 w-full rounded-md flex items-center justify-center gap-2">
          <input className="w-10/12 bg-transparent focus:outline-none" placeholder="채팅 입력"></input>
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
}

export default ChatBox;