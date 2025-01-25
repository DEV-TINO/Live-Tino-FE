import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import RegisterTab from "./RegisterTab";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate(`/`);
  };

  const handleClickBack = () => {
    navigate('/login');
  };

  return (
    <div className="w-screen pt-24 flex flex-col gap-8 items-center">
      <div className="relative w-80">
        <button 
          onClick={handleClickBack} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>
        <button 
          onClick={handleClickLogo} 
          className="text-3xl font-semibold text-blue-600 py-2 w-full text-center"
        >
          LIVE-TINO
        </button>
      </div>
      <div className="w-80">
        <RegisterTab />
      </div>
    </div>
  );
};

export default RegisterPage;