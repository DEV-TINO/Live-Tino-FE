import React from "react";
import useBaseModal from "../../stores/baseModal";
import { useNavigate } from "react-router-dom";

const ConfirmModal = () => {
  const { closeModal } = useBaseModal();
  const navigate = useNavigate();

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleClickConfirm = () => {
    closeModal();
    navigate("/");
  };

  return (
    <div onClick={handleModalClick} className="relative p-4 w-full max-w-sm max-h-full bg-white rounded-md shadow">
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
      <div className="p-4 text-center">
        <svg
          className="mx-auto mb-4 text-gray-400 w-12 h-12"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-500">
          Are you sure you want to exit<br/>the live room?
        </h3>
        <div className="flex justify-center gap-3">
          <button
            onClick={handleClickConfirm}
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium rounded-md text-sm inline-flex items-center px-5 py-2 text-center"
          >
            Yes, I'm sure
          </button>
          <button
            onClick={closeModal}
            type="button"
            className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;