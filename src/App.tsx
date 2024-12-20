import "./index.css";
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./components/main/MainPage";
import LiveRoomPage from "./components/room/LiveRoomPage";
import MyPage from "./components/mypage/MyPage";
import Header from "./components/Header";
import PlayPage from "./components/mypage/PlayPage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/login/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" && <Header />}
      <div className="pb-4">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/live" element={<LiveRoomPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/video" element={<PlayPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
