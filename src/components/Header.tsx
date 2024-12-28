import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useBaseModal from "../stores/baseModal";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin: boolean = false;
  const { openModal } = useBaseModal();

  const handleClickLogo = () => {
    navigate(`/`);
  };

  const handleClickMyPage = () => {
    navigate(`/my`);
  };

  const handleClickLoginPage = () => {
    navigate(`/login`);
  };

  const handleClickExit = () => {
    openModal("exit");
  };

  return (
    <div className="flex justify-between items-center px-10 w-full h-16">
      <button onClick={handleClickLogo} className="text-3xl font-semibold text-blue-600 min-w-40 text-start">LIVE-TINO</button>
      <div className="flex gap-6">
        {location.pathname === "/live" && (
          <div className="flex gap-6">
            <button className="min-w-14">Setting</button>
            <button onClick={handleClickExit} className="min-w-7">Exit</button>
            </div>
        )}
        {location.pathname !== "/live" && (
          <button className="min-w-16 text-end" onClick={handleClickMyPage}>MyPage</button>
        )}
        {isLogin ? (
          <div className="flex gap-1">
            <div className="font-semibold">김태건</div>
            <div>님</div>
          </div>
        ) : (
          <button className="min-w-10 text-end" onClick={handleClickLoginPage}>Login</button>
        )}
      </div>
    </div>
  );
}

export default Header;
