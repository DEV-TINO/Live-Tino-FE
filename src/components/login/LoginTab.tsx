import { useNavigate } from "react-router-dom";
import useUserStore from "../../stores/userStore";

const LoginTab = () => {
  const navigate = useNavigate();
  const { login } = useUserStore();

  const handleClickPassword = () => {
    navigate("/password");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const loginId = formData.get("loginId") as string;
    const password = formData.get("password") as string;

    const success = await login(loginId, password);

    if (success) {
      navigate("/");
    } else {
      alert("Fail to log in");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <input 
          type="text" 
          name="loginId" 
          className="border border-gray-300 rounded-md w-full p-2.5 text-sm focus:border-blue-500" 
          placeholder="Enter username" 
          required 
        />
      </div>
      <div>
        <input 
          type="password" 
          name="password" 
          className="border border-gray-300 rounded-md w-full p-2.5 text-sm focus:border-blue-500" 
          placeholder="Enter password" 
          required 
        />
      </div>
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