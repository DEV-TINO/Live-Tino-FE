import { create } from "zustand"; 

const USER_ID = "1";

interface IUserStore {
  userId: string;
  nickname: string;
  setNickname: (nickname: string) => void;
  id: string;
  setId: (id: string) => void;
}

const useUserStore = create<IUserStore>((set) => ({
  userId: USER_ID,
  nickname: "김태건",
  setNickname: (nickname) => set({ nickname }),
  id: "idydy",
  setId: (id) => set({id}),
}));

export default useUserStore;