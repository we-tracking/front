import { api } from "./axios";

type Passwords = {
  password: string;
  confirmPassword: string;
}

export async function alterPassword({password, confirmPassword}: Passwords){
  const data = api.post("/user/alter-password", {password, confirmPassword})
  return data
}