import { AxiosResponse } from "axios";
import { api } from "./axios";

type Product = {
  productId: number;
  webSourceId: number;
  price: string;
  checkTime: string;
}

type HistoryPriceProps = {
  data: {
    items: Product[]
  } 
}

type ApiResult = AxiosResponse<HistoryPriceProps>;

export async function getHistoryPriceProduct(idProduct: number, idStore: number): Promise<ApiResult> {
  const data = api.get(`/product/history/${idProduct}/${idStore}`)
  return data
}