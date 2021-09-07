import axios from "axios"
import { fetchToken } from "./authHelpers"

export default axios.create({
  headers: { Authorization: `Bearer ${fetchToken()}` },
})
