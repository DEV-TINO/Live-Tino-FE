import React from "react";
import RoomButton from "./RoomButton"
import TimerTab from "./TimerTab";

function MainPage() {

  return (
    <div className="grid grid-cols-[minmax(24px,_1fr)_minmax(400px,600px)_minmax(24px,_1fr)]">
      <div></div>
      <div className="flex flex-col gap-6 pt-32">
        <TimerTab />
        <div className="flex gap-6">
          <RoomButton label="방 생성"/>
          <RoomButton label="입장"/>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default MainPage;
