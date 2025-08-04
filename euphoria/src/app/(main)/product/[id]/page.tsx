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

  return {
    title: `${product.data.attributes.name} - Euphoria`,
    description: product.data.attributes.description,
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
