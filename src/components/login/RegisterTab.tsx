import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterTab() {
  const navigate = useNavigate();

  const handleClickCancel = () => {
    navigate(`/login`);
  };

  return (
    <form className="">
      <div className="mb-2">
        <label className="block mb-1 text-sm font-medium text-gray-900">닉네임</label>
        <input type="text" id="name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm font-medium text-gray-900">아이디</label>
        <input type="text" id="id" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm font-medium text-gray-900">비밀번호</label>
        <input type="password" id="password" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm font-medium text-gray-900">비밀번호 확인</label>
        <input type="password" id="repeatPassword" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm font-medium text-gray-900">휴대폰 인증</label>
        <div className="flex">
          <input type="tel" id="phoneNum" className="border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-1" required />
          <button type="button" className="text-blue-600 border border-blue-600 w-32 hover:bg-blue-50 focus:outline-none font-medium rounded-r-lg text-sm h-[42px]">인증번호 전송</button>
        </div>
      </div>
      <div className="mb-8">
        <label className="block mb-1 text-sm font-medium text-gray-900">인증번호 입력</label>
        <div className="flex">
          <input id="checkNum" className="border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-1" required />
          <button type="button" className="text-blue-600 border border-blue-600 w-32 hover:bg-blue-50 focus:outline-none font-medium rounded-r-lg text-sm h-[42px]">인증 완료</button>
        </div>
      </div>
      <button type="button" onClick={handleClickCancel} className="w-full text-blue-600 hover:bg-blue-50 border border-blue-600 focus:outline-none font-semibold rounded-lg py-2.5 mb-2">취소</button>
      <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-semibold rounded-lg py-2.5">회원가입</button>
    </form>
  );
}

export default RegisterTab;
