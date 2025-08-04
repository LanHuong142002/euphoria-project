import { ApiPaginationResponse } from './api';
import { Product } from './product';

export interface CartAttributes {
  color: string;
  size: string;
  quantity: number;
  product: { data: Product };
}

export interface Cart {
  id: string;
  attributes: CartAttributes;
}

export interface CartPayload {
  color: string;
  size: string;
  quantity: number;
  product: string;
}

export type ListCartResponse = ApiPaginationResponse<Cart[]>;
export type CartResponse = ApiPaginationResponse<Cart>;
