import { Metadata } from 'next';

// Components
import { Content } from './components/Content';

export const metadata: Metadata = {
  title: 'Cart',
};

const CartPage = () => <Content />;

export default CartPage;
