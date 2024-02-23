import { api } from "./axios";

type CreateNewProductType = {
  name: string;
  ean: string;
  imagePath: string;
  webSources: number[];
}

export async function createNewProduct(product: CreateNewProductType) {
  const data = api.post(`/product`, product)
  return data
}