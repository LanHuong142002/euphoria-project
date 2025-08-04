import { Metadata } from 'next';
import { Suspense } from 'react';

// Actions
import { getProductById } from '@/actions';

// Components
import { Content } from './components/Content';
import { ProductDetailSkeleton } from './components/ProductDetailSkeleton';

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
    title: `${name} - Euphoria`,
    description,
  };
};

const ProductPage = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <Content id={id} />
    </Suspense>
  );
};

export default ProductPage;
