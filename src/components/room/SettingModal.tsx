import React, { useState, useEffect } from "react";
import useBaseModal from "../../stores/baseModal";
import useLiveRoomStore from "../../stores/liveRoomStore";

const SettingModal = () => {
  const { closeModal } = useBaseModal();
  const { mode, setMode } = useLiveRoomStore();

  const [tempMode, setTempMode] = useState<string>(mode);
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleModalClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setTempMode(e.target.value);
  };

  const handleConfirm = (): void => {
    setMode(tempMode);
    closeModal();
  };

  const handleShare = (): void => {
    navigator.clipboard.writeText(currentUrl);
  };

  return (
    <div>
      <div onClick={handleModalClick} className="relative p-4 w-[400px] max-w-md max-h-full">
        <div className="relative bg-white rounded-md shadow">
          <div className="flex items-center justify-between px-4 py-2 border-b rounded-t">
            <h3 className="text-lg font-semibold text-gray-900">Setting</h3>
            <button
              onClick={closeModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm w-8 h-8 inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4">
            <div className="grid gap-4 mb-4 grid-cols-2 px-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  방 설정
                </label>
                <div className="bg-gray-50 outline outline-1 outline-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 focus-within:outline-blue-600 focus-within:outline-2">
                  <select className="bg-transparent w-full focus:outline-none">
                    <option selected>선택</option>
                    <option value="public">public</option>
                    <option value="private">private</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  화면 설정
                </label>
                <div className="bg-gray-50 outline outline-1 outline-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 focus-within:outline-blue-600 focus-within:outline-2">
                  <select
                    value={tempMode}
                    onChange={handleModeChange}
                    className="bg-transparent w-full focus:outline-none"
                  >
                    <option value="board">whiteboard</option>
                    <option value="camera">camera</option>
                    <option value="screen">screen share</option>
                  </select>
                </div>
              </div>
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  공유
                </label>
                <div className="flex gap-2">
                  <div className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-md block w-full p-2.5">
                    {currentUrl}
                  </div>
                  <button
                    type="button"
                    onClick={handleShare}
                    className="text-sm min-w-14 p-2.5 rounded-md border"
                  >
                    공유
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <button
                onClick={closeModal}
                type="button"
                className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
              >
                취소
              </button>
              <button
                onClick={handleConfirm}
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium rounded-md text-sm inline-flex items-center px-5 py-2 text-center"
              >
                확인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;