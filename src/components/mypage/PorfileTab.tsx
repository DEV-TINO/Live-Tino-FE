import React from "react";

function ProfileTab() {

  return (
    <div className="flex flex-col">
      <div className="p-1 flex gap-2 items-end">
        <div className="text-2xl">김태건</div>
        <div>님</div>
      </div>
      <div className="p-1">idydy</div>
      <button className="mt-4 rounded-lg p-2 bg-blue-600 hover:bg-blue-800 text-white">프로필 변경</button>
    </div>
  );
}

export default ProfileTab;
