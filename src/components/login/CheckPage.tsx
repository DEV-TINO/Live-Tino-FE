import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate(`/`);
  };

  return (
    <div className="w-screen pt-56 flex flex-col gap-4 items-center">
      <button onClick={handleClickLogo} className="text-3xl font-semibold text-blue-600">LIVE-TINO</button>
      <form className="w-80 flex flex-col gap-2">
        <div className="mb-2">
          <label className="px-0.5 block mb-1 text-sm font-medium text-gray-900">이름</label>
          <input type="text" id="name" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" placeholder="이름을 입력해주세요" required />
        </div>
        <div className="mb-2">
          <label className="block mb-1 text-sm font-medium px-0.5 text-gray-900">휴대폰 인증</label>
          <div className="flex gap-2">
            <input type="tel" id="phoneNum" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 mb-1" placeholder="010-XXXX-XXXX" required />
            <button type="button" className="text-blue-600 border border-blue-600 w-36 hover:bg-blue-50 focus:outline-none font-medium rounded-md text-sm h-[42px]">인증번호 전송</button>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium px-0.5 text-gray-900">인증번호 입력</label>
          <input id="checkNum" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 mb-1" placeholder="인증번호를 입력해주세요" required />
        </div>
        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-semibold rounded-md px-5 py-2.5">
          인증 완료
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
