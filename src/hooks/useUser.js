import { useContext } from "react"
import UserContext from "../context/user"

const useUser = () => {
  const currentUser = useContext(UserContext)

  return { currentUser }
}

export default useUser
