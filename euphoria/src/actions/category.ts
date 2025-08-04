'use server';

import { safeHttpRequest } from './safeHttpRequest';

// Services;
import { httpClient } from '@/services';

// Constants
import { API_ENDPOINT } from '@/constants';

// Actions
import { Category, CategoryResponse } from '@/types';

export const getCategories = async () =>
  safeHttpRequest<Category[]>(() =>
    httpClient.get<CategoryResponse>({
      endpoint: API_ENDPOINT.CATEGORIES,
      options: {
        next: {
          tags: [API_ENDPOINT.CATEGORIES],
        },
      },
    }),
  );
