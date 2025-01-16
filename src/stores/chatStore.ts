import { create } from "zustand";

type ChatMessage = {
  id: number;
  username: string;
  message: string;
};

interface ChatStore {
  messages: ChatMessage[];
  viewer: number;
}

const useChatStore = create<ChatStore>(() => ({
  messages: [
    { id: 1, username: "hmyang", message: "안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다" },
    { id: 2, username: "hmyang", message: "안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다" },
    { id: 3, username: "hmyang", message: "안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다" },
    { id: 4, username: "hmyang", message: "안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다" },
    { id: 5, username: "hmyang", message: "안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다" },
    { id: 6, username: "hmyang", message: "안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다" },
    { id: 7, username: "hmyang", message: "안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다" },
    { id: 8, username: "hmyang", message: "안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다" },
    { id: 9, username: "hmyang", message: "안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다" },
    { id: 10, username: "hmyang", message: "안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다 안녕하세요 반갑습니다" },
  ],
  viewer: 29,
}));

export default useChatStore;