export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  brand: string;
  colors: string[];
  categories: string[];
  sizes: string[];
  quantity: number;
}

export interface ProductCart
  extends Pick<Product, 'id' | 'name' | 'price' | 'images'> {
  color: string;
  size: string;
}
