/**
 * Format a price to a string with 2 decimal places and a dollar sign
 * @param price - The price to format
 * @returns The formatted price
 */
export const formatPrice = (price: number) => `$${price.toFixed(2)}`;
