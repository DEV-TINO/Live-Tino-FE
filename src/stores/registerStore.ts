import { create } from "zustand";
import axios from "axios";

interface IRegisterStore {
  loginId: string;
  userName: string;
  userPassword: string;
  phoneNum: string;
  isIdValid: boolean;
  isSubmitting: boolean;
  setLoginId: (id: string) => void;
  setUserName: (name: string) => void;
  setUserPassword: (password: string) => void;
  setPhoneNum: (phone: string) => void;
  checkDuplicateId: () => Promise<void>;
  registerUser: () => Promise<void>;
}

const useRegisterStore = create<IRegisterStore>((set, get) => ({
  loginId: "",
  userName: "",
  userPassword: "",
  phoneNum: "",
  isIdValid: false,
  isSubmitting: false,

  setLoginId: (id) => set({ loginId: id, isIdValid: false }),
  setUserName: (name) => set({ userName: name }),
  setUserPassword: (password) => set({ userPassword: password }),
  setPhoneNum: (phone) => set({ phoneNum: phone }),

  checkDuplicateId: async () => {
    try {
      const { loginId } = get();
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/duplicate/id`, {
        loginId,
      });
      console.log(response.data.success);
      if (response.data.success) {
        set({ isIdValid: true });
      } else {
        alert("Already Used Id");
        set({ isIdValid: false });
      }
    } catch (error) {
      console.error("Fail to check id: ", error);
      set({ isIdValid: false });
    }
  },

  registerUser: async () => {
    try {
      const { loginId, userName, userPassword, phoneNum } = get();

      set({ isSubmitting: true });

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, {
        loginId,
        userName,
        userPassword,
        phoneNum,
      });

      if (response.data.success) {
        set({
          loginId: "",
          userName: "",
          userPassword: "",
          phoneNum: "",
          isIdValid: false,
          isSubmitting: false,
        });
      } else {
        alert("Fail to Register: " + response.data.message);
      }
    } catch (error) {
      console.error("Fail to Register: ", error);
    } finally {
      set({ isSubmitting: false });
    }
  },
}));

export default useRegisterStore;