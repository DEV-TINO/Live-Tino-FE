import React from "react";
import { useNavigate } from "react-router-dom";
import useBaseModal from "../../stores/baseModal";
import useLiveRoomStore from "../../stores/liveRoomStore";
import useUserStore from "../../stores/userStore";
import IconXbutton from "../../icons/IconXbutton";

const CreateLiveModal = () => {
  const navigate = useNavigate();

  const { closeModal } = useBaseModal();
  const { setTitle, setMode, setRoomSetting, setLiveRoomMode, password, setPassword, setMute } = useLiveRoomStore();
  const { userId } = useUserStore();

  const [selectedRoomSetting, setSelectedRoomSetting] = React.useState<string>("public");

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleRoomSettingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoomSetting(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const selectedMode = formData.get("mode") as string;
    const selectedTitle = formData.get("title") as string;
    const selectedPassword = formData.get("password") as string;
    const muteChecked = formData.get("mute") === "on";

    setPassword(selectedPassword);

    if (selectedRoomSetting === "private" && !password) {
      return;
    }

    setMode(selectedMode);
    setRoomSetting(selectedRoomSetting);
    setTitle(selectedTitle);
    setMute(muteChecked);

    closeModal();
    setLiveRoomMode("create");
    navigate(`/live/${userId}`);
  };

  return (
    <div>
      <div onClick={handleModalClick} className="relative p-4 w-[400px] max-w-md max-h-full">
        <div className="relative bg-white rounded-md shadow">
          <div className="flex items-center justify-between px-4 py-2 border-b rounded-t">
            <h3 className="text-lg font-semibold text-gray-900">Create Live</h3>
            <button
              onClick={closeModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm w-8 h-8 inline-flex justify-center items-center"
            >
              <IconXbutton />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4">
            <div className="grid gap-4 mb-4 grid-cols-2 px-2">
              <div className="col-span-2">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
                  Title
                </label>
                <input
                  name="title"
                  placeholder="Enter title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Room
                </label>
                <div className="bg-gray-50 outline outline-1 outline-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 focus-within:outline-blue-600 focus-within:outline-2">
                  <select defaultValue="public" onChange={handleRoomSettingChange} className="bg-transparent w-full focus:outline-none">
                    <option value="public">public</option>
                    <option value="private">private</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Screen
                </label>
                <div className="bg-gray-50 outline outline-1 outline-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 focus-within:outline-blue-600 focus-within:outline-2">
                  <select
                    name="mode"
                    defaultValue="board"
                    className="bg-transparent w-full focus:outline-none"
                  >
                    <option value="board">whiteboard</option>
                    <option value="camera">camera</option>
                    <option value="screen">screen share</option>
                  </select>
                </div>
              </div>
              {selectedRoomSetting === "private" && (
                <div className="col-span-2">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    required
                  />
                </div>
              )}
              <div className="col-span-2 flex items-center">
                <input
                  type="checkbox"
                  id="mute"
                  name="mute"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
                <label htmlFor="mute" className="ml-2 text-sm font-medium text-gray-900">
                  Mute microphone
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <button
                onClick={closeModal}
                type="button"
                className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium rounded-md text-sm inline-flex items-center px-5 py-2 text-center"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateLiveModal;