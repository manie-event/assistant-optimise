import { useUserService } from "../services/useUserService";


export const useUser = () => {
  const userStore = useUserStore()


  const setUserInfo = async () => {
    const {userInfo} =  useUserService()
    userStore.setUserInfo({...userInfo.value})
  }

  return {
    setUserInfo,
  }
}
