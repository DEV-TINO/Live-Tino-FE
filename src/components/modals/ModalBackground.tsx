import React, { useEffect, FC } from "react";
import useBaseModal from "../../stores/baseModal";

interface IModalBackgroundProps {
  children: React.ReactNode;
}

const ModalBackground: FC<IModalBackgroundProps> = ({ children }) => {
  const { closeModal, modalType } = useBaseModal();

  const preventScroll = () => {
    document.documentElement.style.overflow = "hidden";
  };

  const allowScroll = () => {
    document.documentElement.style.overflow = "auto";
  };

  useEffect(() => {
    preventScroll();
    return () => {
      allowScroll();
    };
  }, []);

  const getBackgroundClass = () => {
    return (modalType === "viewer" || modalType === "selection") ? "bg-transparent" : "bg-black/60";
  };

  return (
    <div 
      onClick={closeModal} 
      className={`w-screen h-screen fixed inset-0 mx-auto ${getBackgroundClass()} z-20 overflow-hidden flex justify-center items-center`}
    >
      {children}
    </div>
  );
};

export default ModalBackground;