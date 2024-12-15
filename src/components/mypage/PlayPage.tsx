import React from "react";
import VideoArea from "./VideoArea";
import PlayVideoTable from "./PlayVideoTable"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

function PlayPage() {

  return (
    <div className="grid grid-cols-[minmax(24px,_1fr)_minmax(512px,992px)_24px_320px_minmax(24px,_1fr)]">
      <div></div>
      <VideoArea />
      <div></div>
      <PlayVideoTable />
      <div></div>
      <div></div>
      <div className="text-2xl font-semibold py-4 pr-2 flex justify-between">
        <div>그림 맞추기 하자</div>
        <FontAwesomeIcon icon={faFloppyDisk} />
      </div>
    </div>
  );
}

export default PlayPage;
