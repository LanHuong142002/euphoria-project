import { Cart, CartPayload } from '@/types';

export const getItemQuantity = (item: Cart) => item?.attributes?.quantity || 0;
export const getItemPrice = (item: Cart) =>
  item?.attributes?.product?.data?.attributes?.price || 0;
export const getItemProductId = (item: Cart) =>
  item?.attributes?.product?.data?.id;
export const getItemColor = (item: Cart) => item?.attributes?.color;
export const getItemSize = (item: Cart) => item?.attributes?.size;

/**
 * Calculate the total items and price of the cart
 *
 * @param cart - The cart to calculate the totals for
 * @returns The total items and price of the cart
 */
export const calculateCartTotals = (
  cart: Cart[],
): {
  totalItems: number;
  totalPrice: number;
} => {
  if (!Array.isArray(cart)) return { totalItems: 0, totalPrice: 0 };

  return cart.reduce(
    (totals, item) => {
      if (!item) return totals;

      const quantity = getItemQuantity(item);
      const price = getItemPrice(item);

      totals.totalItems += quantity;
      totals.totalPrice += price * quantity;

      return totals;
    },
    { totalItems: 0, totalPrice: 0 },
  );
};

/**
 * Find a matching item in the cart
 *
 * @param cart - The cart to search in
 * @param payload - The payload to search for
 * @returns The matching item or undefined
 */
export const findMatchingItem = (
  cart: Cart[],
  payload: CartPayload,
): Cart | undefined =>
  cart.find((item) => {
    if (!item) return false;

    return (
      String(getItemProductId(item)) === String(payload.product) &&
      getItemColor(item) === payload.color &&
      getItemSize(item) === payload.size
    );
  });
