import { AxiosResponse } from "axios";
import { api } from "./axios";
import { ListProduct } from "@/types/list-product";


type ApiResult = AxiosResponse<ListProduct>;

export async function getAllProducts(): Promise<ApiResult> {
  const data = api.get("/product")
  return data
}