import { ApiPaginationResponse } from './api';
import { Category } from './category';

export interface ProductAttributes {
  name: string;
  price: number;
  description: string;
  images: string[];
  brand: string;
  colors: string[];
  category: { data: Category };
  sizes: string[];
  quantity: number;
}

export interface Product {
  id: string;
  attributes: ProductAttributes;
}

export interface ProductCart
  extends Pick<ProductAttributes, 'name' | 'price' | 'images'> {
  id: string;
  color: string;
  size: string;
}

export interface ProductFilterParams {
  categoryName?: string;
  name?: string;
  category?: string;
  priceFrom?: number;
  priceTo?: number;
  page?: number;
  pageSize?: number;
}

export type ProductListResponse = ApiPaginationResponse<Product[]>;
export type ProductResponse = ApiPaginationResponse<Product>;
