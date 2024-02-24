
export type Product = {
  id: number;
  user_id: number;
  name: string;
  description: string;
  ean: string;
  image_path: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export type ListProduct = {
  message: string;
  data: Product[]
}