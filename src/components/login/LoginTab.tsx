import React from "react";
import { useNavigate } from "react-router-dom";

const LoginTab = () => {
  const navigate = useNavigate();

  const handleClickPassword = (): void => {
    navigate(`/password`);
  };

  return (
    <form className="w-full flex flex-col gap-4">
      <input 
        type="text" 
        id="id" 
        className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" 
        placeholder="Username" 
        required 
      />
      <input 
        type="password" 
        id="password" 
        className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" 
        placeholder="Password" 
        required 
      />
      <div 
        onClick={handleClickPassword} 
        className="text-gray-600 text-right text-sm cursor-pointer"
      >
        Forgot Password?
      </div>
      <button 
        type="submit" 
        className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-semibold rounded-md px-5 py-2.5"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginTab;