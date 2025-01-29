import useBaseModal from "../../stores/baseModal";
import ModalBackground from "./ModalBackground";
import CofirmModal from "../room/CofirmModal";
import SettingModal from "../room/SettingModal";
import ProfileModal from "../mypage/ProfileModal";
import CreateLiveModal from "../room/CreateLiveModal";

const ModalPage = () => {
  const { isModalOpen, modalType } = useBaseModal();
  
  if (!isModalOpen) return null;

  return (
    <ModalBackground>
      {modalType === "exit" && <CofirmModal />}
      {modalType === "setting" && <SettingModal />}
      {modalType === "profile" && <ProfileModal />}
      {modalType === "create" && <CreateLiveModal />}
    </ModalBackground>
  );
};

export default ModalPage;