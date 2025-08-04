import QueryString from 'qs';
import { CURRENT_PAGE, PAGE_SIZE } from './pagination';

// Types
import { ProductFilterParams } from '@/types';

export const API_ENDPOINT = {
  SIGN_IN: 'auth/local',

  // Users
  USER: 'users',

  // Categories
  CATEGORIES: 'categories',

  // Products
  PRODUCTS: 'products',

  // Cart
  CART: 'carts',
};

export const QUERY_URL = {
  PRODUCTS: ({
    name = '',
    category = '',
    priceFrom = 0,
    priceTo = 0,
    page = CURRENT_PAGE,
    pageSize = PAGE_SIZE,
  }: ProductFilterParams) =>
    QueryString.stringify(
      {
        populate: { category: { fields: ['*'] } },
        filters: {
          ...(name && { name: { $contains: name } }),
          ...(category && { category: { name: { $eqi: category } } }),
          ...(priceFrom && priceTo && priceFrom <= priceTo
            ? { price: { $between: [priceFrom, priceTo] } }
            : {}),
        },
        pagination: { page, pageSize },
      },
      { addQueryPrefix: true, skipNulls: true, encode: false, indices: false },
    ),
};
