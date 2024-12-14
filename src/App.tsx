import "./index.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/main/MainPage";
import LiveRoomPage from "./components/room/LiveRoomPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="pb-4">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="live" element={<LiveRoomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
