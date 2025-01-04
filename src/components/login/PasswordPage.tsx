import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate(`/`);
  };

  const handleClickCheck = () => {
    navigate(`/check`);
  };

  return (
    <div className="w-screen pt-56 flex flex-col gap-4 items-center">
      <button onClick={handleClickLogo} className="text-3xl font-semibold text-blue-600">LIVE-TINO</button>
      <div className="text-lg pb-2">
        <p>비밀번호를 찾고자 하는</p>
        <p>아이디를 입력해주세요.</p>
      </div>
      <form className="w-80 flex flex-col gap-4">
        <input type="text" id="id" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" placeholder="아이디" required />
        <button onClick={handleClickCheck} type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-semibold rounded-md px-5 py-2.5">
          다음
        </button>
      </form>
      <div className="text-sm flex gap-3">
        <p className="font-medium text-gray-600">아이디가 기억나지 않는다면?</p>
        <button className="font-bold text-blue-600 hover:underline">아이디 찾기</button>
      </div>
    </div>
  );
}

export default LoginPage;
