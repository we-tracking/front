import { AxiosResponse } from "axios";
import { api } from "./axios";

type WebSource = {
  id: number,
  name: string,
  logo_path: string;
  created_at: string;
  domain: string;
  status: string;
  updated_at: string;
  deleted_at: string;
 
}

type DataWebSource = {
  message: string;
  data: WebSource[]
}

type ApiResult = AxiosResponse<DataWebSource>;

export async function getWebSource(): Promise<ApiResult> {
  const data = api.get(`/web-source`)
  return data
}