import React, { useEffect } from "react";
import useBaseModal from "../../stores/baseModal";

interface ModalBackgroundProps {
  children: React.ReactNode;
}

const ModalBackground: React.FC<ModalBackgroundProps> = ({ children }) => {
  const { closeModal } = useBaseModal();

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

  return (
    <div onClick={closeModal} className="w-screen h-screen fixed inset-0 mx-auto bg-black/60 z-50 overflow-hidden flex justify-center items-center">
      {children}
    </div>
  )
}

export default ModalBackground;