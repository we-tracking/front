import { api } from "./axios";



export async function getProduct(id: string) {
  const data = api.get(`/web-source/product/${id}`)
  return data
}