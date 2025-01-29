import { useNavigate, useLocation } from "react-router-dom";
import useBaseModal from "../stores/baseModal";
import useLiveRoomStore from "../stores/liveRoomStore";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin: boolean = true;
  const { openModal } = useBaseModal();
  const { liveRoomMode } = useLiveRoomStore();

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleClickMyPage = () => {
    navigate("/my");
  };

  const handleClickLoginPage = () => {
    navigate("/login");
  };

  const handleClickExit = () => {
    openModal("exit");
  };

  const handleClickSetting = () => {
    openModal("setting");
  };

  return (
    <div className="flex justify-between items-center px-10 w-full h-16">
      <button
        onClick={handleClickLogo}
        className="text-3xl font-semibold text-blue-600 min-w-40 text-start"
      >
        LIVE-TINO
      </button>
      <div className="flex gap-5">
        {location.pathname.startsWith("/live/") && liveRoomMode === "create" && (
          <button onClick={handleClickSetting} className="min-w-14">
            Setting
          </button>
        )}
        {location.pathname.startsWith("/live/") && (
          <button onClick={handleClickExit} className="min-w-7 bg-red-500 hover:bg-red-600 text-white rounded-md py-1 px-2">
            Exit
          </button>
        )}
        {!location.pathname.startsWith("/live/") && (
          <button className="min-w-16 text-end" onClick={handleClickMyPage}>
            MyPage
          </button>
        )}
        {isLogin ? (
          <div className="flex gap-1 items-center">
            <div className="h-5 border mr-3 border-gray-300"></div>
            <div className="font-semibold">김태건</div>
            <div>님</div>
          </div>
        ) : (
          <button
            className="min-w-10 text-end"
            onClick={handleClickLoginPage}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;