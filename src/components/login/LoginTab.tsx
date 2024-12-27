import React from "react";

function LoginTab() {

  return (
    <form className="w-full flex flex-col gap-4">
      <input type="text" id="id" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" placeholder="아이디" required />
      <input type="password" id="password" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 mb-2" placeholder="비밀번호" required />
      <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-semibold rounded-md px-5 py-2.5">
        로그인
      </button>
    </form>
  );
}

export default LoginTab;