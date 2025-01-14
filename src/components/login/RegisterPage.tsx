import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterTab from "./RegisterTab";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleClickLogo = (): void => {
    navigate(`/`);
  };

  return (
    <div className="w-screen pt-10 flex flex-col gap-8 items-center">
      <button 
        onClick={handleClickLogo} 
        className="text-3xl font-semibold text-blue-600 py-2"
      >
        LIVE-TINO
      </button>
      <div className="w-80">
        <RegisterTab />
      </div>
    </div>
  );
};

export default RegisterPage;