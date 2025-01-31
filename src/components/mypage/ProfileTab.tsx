import useBaseModal from "../../stores/baseModal";
import useUserStore from "../../stores/userStore";

const ProfileTab = () => {
  const { openModal } = useBaseModal();
  const { nickname, id } = useUserStore();

  const handleClickProfile = () => {
    openModal("profile");
  };

  return (
    <div className="flex flex-col">
      <div className="p-1 flex gap-2 items-end">
        <div className="text-2xl">{ nickname }</div>
        <div>님</div>
      </div>
      <div className="p-1">{ id }</div>
      <button 
        onClick={handleClickProfile} 
        className="mt-4 rounded-md p-2 border border-blue-600 hover:bg-blue-50 text-blue-600"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileTab;