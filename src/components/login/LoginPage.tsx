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
    <div className="w-screen pt-52 flex flex-col gap-8 items-center">
      <button onClick={handleClickLogo} className="text-3xl font-semibold text-blue-600 py-4">LIVE-TINO</button>
      <div className="w-80">
        <LoginTab />
      </div>
      <div className="flex gap-2 items-center text-gray-900 text-sm">
        <button>아이디 찾기</button>
        <div className="w-0 h-3 border-l border-gray-900"></div>
        <button>비밀번호 찾기</button>
        <div className="w-0 h-3 border-l border-gray-900"></div>
        <button onClick={handleClickRegister}>회원가입</button>
      </div>
    </div>
  );
}

export default LoginPage;
