import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate(`/`);
  };

  const handleClickMyPage = () => {
    navigate(`/my`);
  };

  const handleClickLoginPage = () => {
    navigate(`/login`);
  };

  return (
    <div className="flex justify-between items-center px-10 w-full h-16">
      <button onClick={handleClickLogo} className="text-3xl font-semibold text-blue-600">LIVE-TINO</button>
      <div className="flex gap-6">
        <button>방송설정</button>
        <button>방송종료</button>
        <button onClick={handleClickMyPage}>마이페이지</button>
        <button onClick={handleClickLoginPage}>로그인</button>
      </div>
    </div>
  );
}

export default Header;
