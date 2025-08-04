// Actions
import { getCart } from '@/actions';

// Components
import { EmptyCart } from './components/EmptyCart';

const CartPage = async () => {
  const { data: cart } = await getCart();

  console.log('cart', cart);

  const isCartEmpty = !cart || cart.length === 0;

  if (isCartEmpty) {
    return <EmptyCart />;
  }

  return (
    <div>
      <div>
        <h1>Cart with items</h1>
        {/* TODO: Implement cart with items */}
      </div>
    </div>
  );
};

export default CartPage;
