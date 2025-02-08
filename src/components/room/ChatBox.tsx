import useChatStore from "../../stores/chatStore";
import useBaseModal from "../../stores/baseModal";
import ViewerModal from "./ViewerModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const ChatBox = () => {
  const { openModal, isModalOpen, modalType } = useBaseModal();
  const { messages, viewer } = useChatStore();

  const handleClickViewer = () => {
    openModal("viewer");
  };

  return (
    <div className="relative w-full h-full rounded-md border flex flex-col justify-between">
      {modalType === "viewer" && isModalOpen && <ViewerModal />}
      <div className="border-b flex items-center h-12 px-4 justify-between">
        <div className="font-bold">Chatting</div>
        <button
          type="button"
          onClick={handleClickViewer}
          className="flex gap-1 items-center text-sm hover:bg-gray-100 p-1.5 rounded-md"
        >
          <FontAwesomeIcon icon={faUserAlt} />
          <div>{viewer}</div>
        </button>
      </div>
      <div className="overflow-y-auto h-[395px] xl:h-[475px] 2xl:h-[577px] scrollbar-hide flex flex-col-reverse">
        <div className="text-sm py-5 px-4 flex flex-col gap-2">
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-2">
              <div className="text-blue-600 font-bold">{msg.username}</div>
              <div>{msg.message}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t h-16 px-4 flex items-center text-sm">
        <div className="bg-gray-100 h-10 w-full rounded-md flex items-center justify-center gap-2">
          <input
            className="w-10/12 bg-transparent focus:outline-none"
            placeholder="Enter Chat"
          />
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;