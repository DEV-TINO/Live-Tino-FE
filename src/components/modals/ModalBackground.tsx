import React, { useEffect, FC } from "react";
import useBaseModal from "../../stores/baseModal";

interface ModalBackgroundProps {
  children: React.ReactNode;
}

const ModalBackground: FC<ModalBackgroundProps> = ({ children }) => {
  const { closeModal } = useBaseModal();

  const preventScroll = (): void => {
    document.documentElement.style.overflow = "hidden";
  };

  const allowScroll = (): void => {
    document.documentElement.style.overflow = "auto";
  };

  useEffect(() => {
    preventScroll();
    return () => {
      allowScroll();
    };
  }, []);

  return (
    <div 
      onClick={closeModal} 
      className="w-screen h-screen fixed inset-0 mx-auto bg-black/60 z-50 overflow-hidden flex justify-center items-center"
    >
      {children}
    </div>
  );
};

export default ModalBackground;