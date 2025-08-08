import { notFound } from 'next/navigation';

// Actions
import { getProductById } from '@/actions';

// Components
import { ProductDetailAction } from './ProductDetailAction';
import { Typography } from '@/ui/components/common/Typography';

interface ContentProps {
  id: string;
  isAuthenticated: boolean;
}

export const Content = async ({ id, isAuthenticated }: ContentProps) => {
  const product = await getProductById(id);

  // Check if product exists
  if (Array.isArray(product.data) && product.data.length === 0) {
    notFound();
  }

  const { attributes } = product.data;
  const {
    name = '',
    sizes = [],
    colors = [],
    description = '',
    images = [],
    price = 0,
  } = attributes || {};
  const { name: categoryName = '' } =
    attributes?.category?.data?.attributes || {};

  return (
    <div className="pb-[100px]">
      <div className="relative">
        <ProductDetailAction
          id={id}
          images={images}
          name={name}
          price={price}
          sizes={sizes}
          colors={colors}
          categoryName={categoryName}
          isAuthenticated={isAuthenticated}
        />

        <div className="absolute top-0 left-0 w-full h-full z-[-2] hidden lg:flex">
          <div className="bg-background-tertiary w-1/2 h-full" />
          <div className="w-1/2 h-full" />
        </div>
      </div>

      {/* Product Description */}
      <div className="pl-4 lg:pl-0 container mx-auto mt-5 lg:mt-[100px]">
        <div className="flex items-stretch gap-[15px] mb-7.5">
          <div className="w-[6px] bg-background-quaternary rounded-xl" />
          <Typography
            fontFamily="coreSans"
            fontWeight="bold"
            fontSize="28px"
            color="secondary"
          >
            Product Description
          </Typography>
        </div>

        <div className="space-y-7.5">
          <Typography
            fontWeight="medium"
            fontSize="lg"
            color="secondary"
            className="underline decoration-border-primary decoration-[1.4px] underline-offset-[18px]"
          >
            Description
          </Typography>

          <Typography fontWeight="light">{description}</Typography>
        </div>
      </div>
    </div>
  );
};
