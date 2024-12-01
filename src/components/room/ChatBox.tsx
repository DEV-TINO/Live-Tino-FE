import React from "react";

function ChatBox() {

  return (  
    <div className="w-full h-[558px] rounded-lg border flex flex-col justify-between">
      <div className="border-b h-12 flex items-center px-4 justify-between">
        <div className="font-bold">채팅</div>
        <div className="text-sm hover:bg-gray-100 p-1.5 rounded-lg">참여자 29</div>
      </div>
      <div>
        <div className="border-b text-sm pb-5 px-4 flex flex-col justify-end gap-2 overflow-y-scroll h-[446px] scrollbar-hide">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex gap-2">
            <div className="text-red-500 font-bold">hmyang</div>
            <div>
              안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다
            </div>
          </div>
        ))}
        </div>
        <div className="h-16 px-4 flex items-center text-sm">
          <input className="bg-gray-100 h-10 w-full rounded-lg focus:outline-none px-2" placeholder="채팅 입력"></input>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
