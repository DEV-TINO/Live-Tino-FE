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
      <button onClick={handleClickLogo} className="text-3xl font-semibold text-blue-600 mb-8">LIVE-TINO</button>
      <form className="w-80 flex flex-col gap-4">
        <input type="text" id="id" className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" placeholder="Username" required />
        <button onClick={handleClickCheck} type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-semibold rounded-md px-5 py-2.5">
          Continue
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
