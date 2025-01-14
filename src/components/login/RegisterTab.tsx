import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterTab = () => {
  const navigate = useNavigate();

  const handleClickLogin = (): void => {
    navigate(`/login`);
  };

  return (
    <form className="flex flex-col gap-2">
      <div className="mb-2">
        <label 
          htmlFor="name" 
          className="px-0.5 block mb-1 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input 
          type="text" 
          id="name" 
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" 
          placeholder="Name" 
          required 
        />
      </div>
      <div className="mb-2">
        <label 
          htmlFor="id" 
          className="block px-0.5 mb-1 text-sm font-medium text-gray-900"
        >
          Username
        </label>
        <div className="flex gap-2">
          <input 
            type="text" 
            id="id" 
            className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" 
            placeholder="Username" 
            required 
          />
          <button 
            type="button" 
            className="text-blue-600 border border-blue-600 w-36 hover:bg-blue-50 focus:outline-none font-medium rounded-md text-sm h-[42px]"
          >
            Check
          </button>
        </div>
      </div>
      <div className="mb-2">
        <label 
          htmlFor="password" 
          className="block mb-1 px-0.5 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input 
          type="password" 
          id="password" 
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" 
          placeholder="Password" 
          required 
        />
      </div>
      <div className="mb-2">
        <label 
          htmlFor="repeatPassword" 
          className="block mb-1 text-sm px-0.5 font-medium text-gray-900"
        >
          Confirm Password
        </label>
        <input 
          type="password" 
          id="repeatPassword" 
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" 
          placeholder="Confirm Password" 
          required 
        />
      </div>
      <div className="mb-2">
        <label 
          htmlFor="phoneNum" 
          className="block mb-1 text-sm font-medium px-0.5 text-gray-900"
        >
          Phone Number
        </label>
        <div className="flex gap-2">
          <input 
            type="tel" 
            id="phoneNum" 
            className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 mb-1" 
            placeholder="010-XXXX-XXXX" 
            required 
          />
          <button 
            type="button" 
            className="text-blue-600 border border-blue-600 w-36 hover:bg-blue-50 focus:outline-none font-medium rounded-md text-sm h-[42px]"
          >
            Get OTP
          </button>
        </div>
      </div>
      <div className="mb-6">
        <label 
          htmlFor="checkNum" 
          className="block mb-1 text-sm font-medium px-0.5 text-gray-900"
        >
          OTP Verification
        </label>
        <div className="flex gap-2">
          <input 
            id="checkNum" 
            className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5 mb-1" 
            placeholder="OTP" 
            required 
          />
          <button 
            type="button" 
            className="text-blue-600 border border-blue-600 w-36 hover:bg-blue-50 focus:outline-none font-medium rounded-md text-sm h-[42px]"
          >
            Check
          </button>
        </div>
      </div>
      <button 
        type="submit" 
        className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-semibold rounded-md py-2.5"
      >
        Sign Up
      </button>
      <div className="text-sm flex gap-3">
        <p className="font-medium text-gray-600">Already have an account?</p>
        <button 
          onClick={handleClickLogin} 
          className="font-bold text-blue-600 hover:underline"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default RegisterTab;