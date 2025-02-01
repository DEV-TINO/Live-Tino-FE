import React from "react";
import { useNavigate } from "react-router-dom";
import useBaseModal from "../../stores/baseModal";
import useLiveRoomStore from "../../stores/liveRoomStore";
import useUserStore from "../../stores/userStore";

const JoinLiveModal = () => {
  const navigate = useNavigate();

  const { closeModal } = useBaseModal();
  const { password, roomSetting, setLiveRoomMode } = useLiveRoomStore();
  const { userId } = useUserStore();

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const selectedRoom = formData.get("room") as string;
    const selectedPassword = formData.get("password") as string;

    if (selectedRoom !== userId) {
      alert("Live Room does not exist");
      return;
    }

    if ((roomSetting === "private") && (selectedPassword !== password)) {
      alert("Incorrect password");
      return;
    }

    closeModal();
    setLiveRoomMode("join");
    navigate(`/live/${selectedRoom}`);
  };

  return (
    <div>
      <div onClick={handleModalClick} className="relative p-4 w-[400px] max-w-md max-h-full">
        <div className="relative bg-white rounded-md shadow">
          <div className="flex items-center justify-between px-4 py-2 border-b rounded-t">
            <h3 className="text-lg font-semibold text-gray-900">Join Live</h3>
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
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4">
            <div className="grid gap-4 mb-4 grid-cols-2 px-2">
              <div className="col-span-2">
                <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900">
                  Room ID
                </label>
                <input
                  name="room"
                  placeholder="Enter ID"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <button onClick={closeModal} type="button" className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium rounded-md text-sm inline-flex items-center px-5 py-2 text-center"
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinLiveModal;