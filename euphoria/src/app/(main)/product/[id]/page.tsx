import { Metadata } from 'next';
import { Suspense } from 'react';

// Actions
import { getProductById } from '@/actions';

// Components
import { Content } from './components/Content';
import { ProductDetailSkeleton } from './components/ProductDetailSkeleton';

// Utils
import { getUserFromSession } from '@/utils';

interface Props {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;

  const product = await getProductById(id);
  const { attributes } = product.data || {};
  const { name = '', description = '' } = attributes || {};

  return {
    title: name,
    description,
  };
};

const ProductPage = async ({ params }: Props) => {
  const { id } = await params;
  const { isAuthenticated } = await getUserFromSession();

  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <Content id={id} isAuthenticated={isAuthenticated} />
    </Suspense>
  );
};

export default ProductPage;
