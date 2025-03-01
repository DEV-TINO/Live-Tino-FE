import { create } from "zustand";
import axios from "axios";

interface IUserStore {
  userId: string;
  setUserId: (userId: string) => void;
  nickname: string;
  setNickname: (nickname: string) => void;
  id: string;
  setId: (id: string) => void;
  login: (loginId: string, password: string) => Promise<boolean>;
  isLogin: boolean;
}

const useUserStore = create<IUserStore>((set) => ({
  userId: "",
  setUserId: (userId) => set({ userId }),
  nickname: "",
  setNickname: (nickname) => set({ nickname }),
  id: "",
  setId: (id) => set({id}),
  isLogin: false,
  login: async (loginId, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, {
        loginId,
        userPassword: password,
      });

      const userData = response.data;

      if (userData.success) {
        set({ id: loginId, nickname: userData.userInfo.userName, userId: userData.userInfo.userId, isLogin: true });

        return true;
      }
      return false;
    } catch (error) {
      console.error("Login Error:", error);
      return false;
    }
  },
}));

export default useUserStore;