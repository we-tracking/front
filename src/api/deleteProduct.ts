import { api } from "./axios";

export async function deleteOneProduct(id: number){
  const data = api.get(`/product/delete/${id}`)
  return data
}