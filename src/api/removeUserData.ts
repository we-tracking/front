
import Cookies from "js-cookie"

export function removeUserData() {
  Cookies.remove("token")
  Cookies.remove("user")
  localStorage.removeItem("email")
}