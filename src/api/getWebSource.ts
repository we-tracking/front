import { api } from "./axios";



export async function getWebSource() {
  const data = api.get(`/web-source`)
  return data
}