import "./index.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/main/MainPage";
import LiveRoomPage from "./components/room/LiveRoomPage";
import MyPage from "./components/mypage/MyPage";
import Header from "./components/Header";
import PlayPage from "./components/mypage/PlayPage";

function App() {
  return (
    <BrowserRouter>
      <div className="pb-4">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/live" element={<LiveRoomPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/video" element={<PlayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
