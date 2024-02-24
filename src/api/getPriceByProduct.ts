import { AxiosResponse } from "axios";
import { api } from "./axios";

type ProductHistory = {
  productId: number;
  webSourceId: number;
  price: string;
  lastCheck: string;
  webSourceName: string;
  webSourceLogo: string;
  domain: string;

}

type WebProductHistory = {
  message: string;
  data: ProductHistory[]
}

type ApiResult = AxiosResponse<WebProductHistory>;

export async function getPriceByProduct(id: string): Promise<ApiResult> {
  const data = api.get(`/product/history/${id}`)
  return data
}