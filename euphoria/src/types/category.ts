import { Product } from './product';
import { ApiPaginationResponse } from './api';

export interface CategoryAttributes {
  name: string;
  value: string;
  products: Product[];
}

export interface Category {
  id: string;
  attributes: CategoryAttributes;
}

export type CategoryResponse = ApiPaginationResponse<Category[]>;
