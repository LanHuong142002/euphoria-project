import { Category } from './category';

export interface ProductAttributes {
  name: string;
  price: number;
  description: string;
  images: string[];
  brand: string;
  colors: string[];
  categories: Category[];
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
  category?: string;
  priceFrom?: number;
  priceTo?: number;
  page?: number;
  pageSize?: number;
}
