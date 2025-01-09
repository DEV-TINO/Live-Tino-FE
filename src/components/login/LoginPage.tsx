import React from "react";
import LoginTab from "./LoginTab";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate(`/`);
  };

  const handleClickRegister = () => {
    navigate(`/register`);
  };

  return (
    <div className="w-screen pt-52 flex flex-col gap-4 items-center">
      <button onClick={handleClickLogo} className="text-3xl font-semibold text-blue-600 py-4">LIVE-TINO</button>
      <div className="w-80 pt-4">
        <LoginTab />
      </div>
      <div className="flex gap-2 w-80 text-sm">
        <p className="text-gray-600">Don’t have an account yet?</p>
        <button onClick={handleClickRegister} className="text-blue-600 font-bold hover:underline">Sign Up</button>
      </div>
    </div>
  );
}

export default LoginPage;
