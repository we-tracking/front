import { AxiosResponse } from "axios";
import { api } from "./axios";

type WebSources = {
  id: number;
  url: string
}

type CreateNewProductType = {
  name: string;
  ean: string;
  imagePath: string;
  webSources: WebSources[];
}

type CreateProductAxios = {
  message: string;
  data: {
    id: string
  }
}

type ApiResult = AxiosResponse<CreateProductAxios>;

export async function createNewProduct(product: CreateNewProductType): Promise<ApiResult> {
  const data = api.post(`/product`, product)
  return data
}