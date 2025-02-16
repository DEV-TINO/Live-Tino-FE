import { useState, useEffect } from "react";
import { Client } from "@stomp/stompjs";
import useChatStore from "../../stores/chatStore";
import useBaseModal from "../../stores/baseModal";
import ViewerModal from "./ViewerModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import useViewerModal from "../../stores/viewerModal";

const ChatBox = () => {
  const { openModal, isModalOpen, modalType } = useBaseModal();
  const { messages } = useChatStore();
  const [client, setClient] = useState<Client | null>(null);
  const [message, setMessage] = useState("");
  const { viewer } = useViewerModal();

  const handleClickViewer = () => {
    openModal("viewer");
  };

  useEffect(() => {
    const stompClient = new Client({
      brokerURL: "ws://localhost:8080/stomp/chat",
      onConnect: () => {
        console.log("Connected to WebSocket");
      },
      onDisconnect: () => console.log("Disconnected"),
      onStompError: (frame) => console.error("STOMP Error", frame),
    });

    stompClient.activate();
    setClient(stompClient);

    return () => {
      stompClient.deactivate();
    };
  }, []);

  const sendMessage = () => {
    if (client && message.trim()) {
      const chatMessage = {
        type: "MESSAGE",
        roomId: "550e8400-e29b-41d4-a716-446655440000",
        chatMessage: message,
        sender: "user1",
      };
      client.publish({
        destination: "/app/chat.message.a5c52903-338c-49dd-859f-dda2a8d609d9",
        body: JSON.stringify(chatMessage),
      });
      setMessage("");
    }
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;