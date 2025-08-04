'use server';

import { safeHttpRequest } from './safeHttpRequest';

// Services
import { httpClient } from '@/services';

// Constants
import { API_ENDPOINT } from '@/constants';

// Types
import { Cart, CartPayload, CartResponse, ListCartResponse } from '@/types';

export const getCart = async () =>
  safeHttpRequest<Cart[]>((token) => {
    const endpoint = `${API_ENDPOINT.CART}?populate[product][fields]=*`;

    return httpClient.get<ListCartResponse>({
      endpoint,
      options: {
        next: {
          tags: [endpoint],
        },
      },
      token,
    });
  }, true);

export const addToCart = async (body: CartPayload) =>
  safeHttpRequest<Cart[]>(
    (token) =>
      httpClient.post<ListCartResponse, { data: CartPayload }>({
        endpoint: API_ENDPOINT.CART,
        body: { data: body },
        token,
      }),
    true,
  );

export const updateCartById = async (id: string, body: CartPayload) =>
  safeHttpRequest<Cart[]>(
    (token) =>
      httpClient.put<ListCartResponse, { data: CartPayload }>({
        endpoint: `${API_ENDPOINT.CART}/${id}`,
        body: { data: body },
        token,
      }),
    true,
  );

export const deleteCart = async (id: string) =>
  safeHttpRequest<Cart>(
    (token) =>
      httpClient.delete<CartResponse>({
        endpoint: `${API_ENDPOINT.CART}/${id}`,
        token,
      }),
    true,
  );
