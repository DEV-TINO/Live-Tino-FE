import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const CheckPage = () => {
  const navigate = useNavigate();

  const handleClickLogo = (): void => {
    navigate(`/`);
  };

  const handleClickBack = (): void => {
    navigate('/password');
  };

  return (
    <div className="w-screen pt-56 flex flex-col gap-4 items-center">
      <div className="relative w-80">
        <button 
          onClick={handleClickBack} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>
        <button 
          onClick={handleClickLogo} 
          className="text-3xl font-semibold text-blue-600 w-full text-center"
        >
          LIVE-TINO
        </button>
      </div>
      <form className="mt-8 w-80 flex flex-col gap-2">
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
          className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-semibold rounded-md px-5 py-2.5"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default CheckPage;