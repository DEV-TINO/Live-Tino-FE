import { useNavigate } from "react-router-dom";
import useRegisterStore from "../../stores/registerStore";

const RegisterTab = () => {
  const navigate = useNavigate();
  const { isIdValid, isSubmitting, setLoginId, setUserName, setUserPassword, setPhoneNum, checkDuplicateId, registerUser } = useRegisterStore();

  const handleClickLogin = () => {
    navigate("/login");
  };

  const getSubmitButtonClass = () => {
    return !isIdValid || isSubmitting
      ? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-800";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const typedName = formData.get("name") as string;
    const typedUsername = formData.get("username") as string;
    const typedPassword = formData.get("password") as string;
    const typedPhone = formData.get("phone") as string;

    setLoginId(typedUsername);
    setUserName(typedName);
    setUserPassword(typedPassword);
    setPhoneNum(typedPhone);
    
    await registerUser();
    navigate("/login");
  };

  return (
    <form 
      className="flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <div className="mb-2">
        <label className="px-0.5 block mb-1 text-sm font-medium text-gray-900">
          Name
        </label>
        <input 
          name="name"
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" 
          placeholder="Name" 
          required 
        />
      </div>

      <div className="mb-2">
        <label className="block px-0.5 mb-1 text-sm font-medium text-gray-900">
          Username
        </label>
        <div className="flex gap-2">
          <input 
            name="username"
            className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" 
            placeholder="Username" 
            required 
          />
          <button 
            type="button" 
            onClick={checkDuplicateId}
            className="text-blue-600 border border-blue-600 w-36 hover:bg-blue-50 focus:outline-none font-medium rounded-md text-sm h-[42px]"
          >
            Check
          </button>
        </div>
      </div>
      <div className="mb-2">
        <label className="block mb-1 px-0.5 text-sm font-medium text-gray-900">
          Password
        </label>
        <input 
          name="password"
          className="border border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full p-2.5" 
          placeholder="Password" 
          required 
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-sm px-0.5 font-medium text-gray-900">
          Phone Number
        </label>
        <div className="flex gap-2">
          <input 
            name="phone"
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
        className={`w-full text-white focus:outline-none font-semibold rounded-md py-2.5 ${getSubmitButtonClass()}`}
        disabled={!isIdValid || isSubmitting}
      >
        Sign Up
      </button>
      <div className="text-sm flex gap-3">
        <p className="font-medium text-gray-600">Already have an account?</p>
        <button
          type="button"
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