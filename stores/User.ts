import { defineStore } from "pinia";
import type { UserModel } from "~/models/UserModel";

export const useUserStore = defineStore('user', () => {
const user = ref<UserModel>()

  //setter
  const setUserInfo = (newUser: UserModel) => {
    user.value = newUser;
  }

  return {
    user,
    setUserInfo
   }
});
