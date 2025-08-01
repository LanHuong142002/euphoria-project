import { safeHttpRequest } from './safeHttpRequest';

// Services
import { httpClient } from '@/services';

// Constants
import { API_ENDPOINT, QUERY_URL } from '@/constants';

// Types
import { Product, ProductFilterParams, ProductResponse } from '@/types';

export const getProducts = async (params: ProductFilterParams) =>
  safeHttpRequest<Product[]>(() => {
    const endpoint = `${API_ENDPOINT.PRODUCTS}${QUERY_URL.PRODUCTS(params)}`;

    return httpClient.get<ProductResponse>({
      endpoint,
      options: {
        next: {
          tags: [API_ENDPOINT.PRODUCTS],
        },
      },
    });
  });
