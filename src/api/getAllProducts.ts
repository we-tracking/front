import { api } from "./axios";



export async function getAllProducts() {
  const data = api.get("/product")
  return data
}