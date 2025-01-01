import React from "react";
import useBaseModal from "../../stores/baseModal";
import ModalBackground from "./ModalBackground"
import CofirmModal from "../room/CofirmModal";
import SettingModal from "../room/SettingModal"

function ModalPage() {
  const { isModalOpen, modalType } = useBaseModal();
  if(!isModalOpen) return null;

  return (
    <ModalBackground>
      {modalType === "exit" && <CofirmModal />}
      {modalType === "setting" && <SettingModal />}
    </ModalBackground>
  );
}

export default ModalPage;