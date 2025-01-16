import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./components/main/MainPage";
import LiveRoomPage from "./components/room/LiveRoomPage";
import MyPage from "./components/mypage/MyPage";
import Header from "./components/Header";
import PlayPage from "./components/mypage/PlayPage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/login/RegisterPage";
import ModalPage from "./components/modals/ModalPage";
import PasswordPage from "./components/login/PasswordPage";
import CheckPage from "./components/login/CheckPage";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div>
      <ModalPage />
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/password" &&
        location.pathname !== "/check" && <Header />}
      <div className="pb-4">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/live" element={<LiveRoomPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/video/:id" element={<PlayPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/password" element={<PasswordPage />} />
          <Route path="/check" element={<CheckPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;