import React from "react";
import useBaseModal from "../../stores/baseModal";
import useViewerModal from "../../stores/viewerModal";
import IconXbutton from "../../icons/IconXbutton";

const ViewerModal = () => {
  const { closeModal } = useBaseModal();
  const { participantList, fetchParticipants, streamerId } = useViewerModal();

  React.useEffect(() => {
    if (streamerId) {
      fetchParticipants(streamerId);
    }
  }, [streamerId, fetchParticipants]);

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
          <IconXbutton />
          <span className="sr-only">Close modal</span>
        </button>
        <div className="font-bold pb-2">Viewer</div>
        <div className="flex flex-col gap-2 overflow-y-auto h-80 scrollbar-hide pb-2">
          {participantList.length > 0 ? (
            participantList.map((participant) => (
              <div key={participant.userId} className="flex gap-1 items-end">
                <div className="text-blue-600">{participant.nickname}</div>
                <div className="text-sm text-gray-400">({participant.userId})</div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-center">No participants</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewerModal;