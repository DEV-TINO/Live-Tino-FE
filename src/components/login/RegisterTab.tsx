import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterTab() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate(`/login`);
  };

  return (
    <form className="flex flex-col gap-2">
      <div className="mb-2">
        <label className="px-0.5 block mb-1 text-sm font-medium text-gray-900">이름</label>
        <input type="text" id="name" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" placeholder="이름을 입력해주세요" required />
      </div>
      <div className="mb-2">
        <label className="block px-0.5 mb-1 text-sm font-medium text-gray-900">아이디</label>
        <div className="flex gap-2">
          <input type="text" id="id" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" placeholder="아이디를 입력해주세요" required />
          <button type="button" className="text-blue-600 border border-blue-600 w-36 hover:bg-blue-50 focus:outline-none font-medium rounded-md text-sm h-[42px]">중복 확인</button>
        </div>
      </div>
      <div className="mb-2">
        <label className="block mb-1 px-0.5 text-sm font-medium text-gray-900">비밀번호</label>
        <input type="password" id="password" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" placeholder="비밀번호를 입력해주세요" required />
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm px-0.5 font-medium text-gray-900">비밀번호 확인</label>
        <input type="password" id="repeatPassword" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" placeholder="비밀번호를 입력해주세요" required />
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
        <div className="flex gap-2">
          <input id="checkNum" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 mb-1" placeholder="인증번호를 입력해주세요" required />
          <button type="button" className="text-blue-600 border border-blue-600 w-36 hover:bg-blue-50 focus:outline-none font-medium rounded-md text-sm h-[42px]">인증 완료</button>
        </div>
      </div>
      <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-semibold rounded-md py-2.5">회원가입</button>
      <div className="text-sm flex gap-3">
        <p className="font-medium text-gray-600">이미 계정이 있으신가요?</p>
        <button onClick={handleClickLogin} className="font-bold text-blue-600 hover:underline">로그인</button>
      </div>
    </form>
  );
}

export default RegisterTab;