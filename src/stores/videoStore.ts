import { create } from 'zustand';

type TVideo = {
  title: string;
  date: string;
  duration: string;
};

interface VideoStore {
  videos: TVideo[];
  currentPage: number;
  setVideos: (videos: TVideo[]) => void;
  setCurrentPage: (page: number) => void;
}

const useVideoStore = create<VideoStore>((set) => ({
  videos: [
    { title: "첫 번째 동영상", date: "24.11.12", duration: "00:27:12" },
    { title: "두 번째 동영상", date: "24.11.13", duration: "00:30:45" },
    { title: "세 번째 동영상", date: "24.11.14", duration: "00:25:38" },
    { title: "네 번째 동영상", date: "24.11.12", duration: "00:27:12" },
    { title: "다섯 번째 동영상", date: "24.11.13", duration: "00:30:45" },
    { title: "여섯 번째 동영상", date: "24.11.14", duration: "00:25:38" },
    { title: "일곱 번째 동영상", date: "24.11.12", duration: "00:27:12" },
    { title: "아기다리 고기다리던 제목이 엄청 긴 여덟 번째 동영상", date: "24.11.13", duration: "00:30:45" },
    { title: "아홉 번째 동영상", date: "24.11.14", duration: "00:25:38" },
    { title: "열 번째 동영상", date: "24.11.12", duration: "00:27:12" },
  ],
  currentPage: 1,
  setVideos: (videos) => set({ videos }),
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useVideoStore;