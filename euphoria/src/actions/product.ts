'use server';

import { safeHttpRequest } from './safeHttpRequest';

// Services
import { httpClient } from '@/services';

// Constants
import { API_ENDPOINT, QUERY_URL } from '@/constants';

// Types
import {
  Product,
  ProductFilterParams,
  ProductListResponse,
  ProductResponse,
} from '@/types';

export const getProducts = async (params: ProductFilterParams) =>
  safeHttpRequest<Product[]>(() => {
    const endpoint = `${API_ENDPOINT.PRODUCTS}${QUERY_URL.PRODUCTS(params)}`;

    return httpClient.get<ProductListResponse>({
      endpoint,
      options: {
        next: {
          tags: [API_ENDPOINT.PRODUCTS],
        },
      },
    });
  });

export const getProductById = async (id: string) =>
  safeHttpRequest<Product>(() => {
    const endpoint = `${API_ENDPOINT.PRODUCTS}/${id}?populate[category][fields]=*`;

    return httpClient.get<ProductResponse>({
      endpoint,
      options: {
        next: {
          tags: [`${API_ENDPOINT.PRODUCTS}/${id}?populate[category][fields]=*`],
        },
      },
    });
  });
