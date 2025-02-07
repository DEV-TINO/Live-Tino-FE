import React from "react";
import useBaseModal from "../../stores/baseModal";

const ViewerModal = () => {
  const { closeModal } = useBaseModal();

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleModalClick}
      className="absolute top-9 left-0 right-0 bottom-0 flex justify-center h-96 px-4 z-50"
    >
      <div className="border relative p-4 w-full max-w-sm max-h-full bg-white rounded-md shadow-xl">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm w-8 h-8 inline-flex justify-center items-center"
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
        <div className="font-bold pb-2">Viewer</div>
        <div className="flex flex-col gap-2 overflow-y-auto h-80 scrollbar-hide pb-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="flex gap-1 items-end">
              <div className="text-blue-600">hmyang</div>
              <div className="text-sm text-gray-400">(hmyang0329)</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewerModal;