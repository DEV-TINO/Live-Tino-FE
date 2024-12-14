import React from "react";
import { useNavigate } from "react-router-dom";

function RoomButton({ label }: {label: string}) {
  const navigate = useNavigate();

  const handleClickLiveButton = () => {
    navigate(`/live`);
  };

  return (
    <button onClick={handleClickLiveButton} className="border-2 border-blue-400 w-full aspect-[1/1] rounded-xl hover:bg-blue-400 hover:text-white hover:font-semibold">{label}</button>
  );
}

export default RoomButton;
