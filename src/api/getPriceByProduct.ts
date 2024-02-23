import { api } from "./axios";



export async function getPriceByProduct(id: string) {
  const data = api.get(`/product/history/${id}`)
  return data
}