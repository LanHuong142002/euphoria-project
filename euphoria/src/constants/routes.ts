export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  CART: '/cart',
  ORDER_SUCCESS: '/order/success',
  PRODUCT_DETAILS: (id: string) => `/product/${id}`,
};

export const PRIVATE_ROUTERS = [ROUTES.CART, ROUTES.ORDER_SUCCESS];
export const AUTH_ROUTERS = [ROUTES.LOGIN];
