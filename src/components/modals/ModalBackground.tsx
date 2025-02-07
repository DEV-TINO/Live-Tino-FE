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
    if (modalType === "viewer") {
      return "bg-transparent";
    }
    return "bg-black/60";
  };

  return (
    <div 
      onClick={closeModal} 
      className={`w-screen h-screen fixed inset-0 mx-auto ${getBackgroundClass()} z-50 overflow-hidden flex justify-center items-center`}
    >
      {children}
    </div>
  );
};

export default ModalBackground;