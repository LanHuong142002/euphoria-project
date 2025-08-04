export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  CART: '/cart',
  CHECKOUT: '/checkout',
  PRODUCT_DETAILS: (id: string) => `/product/${id}`,
};

export const PRIVATE_ROUTERS = [ROUTES.CART, ROUTES.CHECKOUT];
export const AUTH_ROUTERS = [ROUTES.LOGIN];
