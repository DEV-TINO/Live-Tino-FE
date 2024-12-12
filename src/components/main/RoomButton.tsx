import React from "react";

interface RoomButtonProps {
  label: string;
}

function RoomButton({ label }:RoomButtonProps) {

  return (
    <button>{label}</button>
  );
}

export default RoomButton;
