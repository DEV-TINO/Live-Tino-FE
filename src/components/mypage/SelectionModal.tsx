import React from "react";
import useBaseModal from "../../stores/baseModal";

const SelectionModal = () => {
  const { closeModal } = useBaseModal();

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleModalClick} className="absolute top-10 right-0 flex justify-center z-50 h-20 px-4">
      <div className="border text-black text-base relative flex flex-col items-start py-2 w-full max-w-sm max-h-full bg-white rounded-md shadow-xl">
        <button
          type="button"
          onClick={closeModal}
          className="hover:bg-gray-100 w-full h-10 px-4"
        >
          Download
        </button>
        <button
          type="button"
          onClick={closeModal}
          className="hover:bg-gray-100 w-full h-10 px-4"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SelectionModal;