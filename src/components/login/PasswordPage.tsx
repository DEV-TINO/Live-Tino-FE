import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate(`/`);
  };

  const handleClickBack = () => {
    navigate('/login');
  };

  const handleClickCheck = () => {
    navigate(`/check`);
  };

  return (
    <div className="w-screen pt-56 flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-2">
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
        <div className="text-gray-400 text-center">Find Password</div>
      </div>
      <form className="mt-6 w-80 flex flex-col gap-4">
        <input 
          type="text" 
          id="id" 
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" 
          placeholder="Username" 
          required 
        />
        <button 
          onClick={handleClickCheck} 
          type="submit" 
          className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:outline-none font-semibold rounded-md px-5 py-2.5"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default LoginPage;