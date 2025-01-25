import useBaseModal from "../../stores/baseModal";

const ProfileTab = () => {
  const { openModal } = useBaseModal();

  const handleClickProfile = () => {
    openModal("profile");
  };

  return (
    <div className="flex flex-col">
      <div className="p-1 flex gap-2 items-end">
        <div className="text-2xl">김태건</div>
        <div>님</div>
      </div>
      <div className="p-1">idydy</div>
      <button 
        onClick={handleClickProfile} 
        className="mt-4 rounded-md p-2 border border-blue-600 hover:bg-blue-50 text-blue-600"
      >
        프로필 변경
      </button>
    </div>
  );
};

export default ProfileTab;