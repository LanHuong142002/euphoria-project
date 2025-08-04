import { notFound } from 'next/navigation';

// Actions
import { getProductById } from '@/actions';

// Components
import { ProductDetailAction } from './ProductDetailAction';

// Utils
import { cn } from '@/utils';

interface ContentProps {
  id: string;
}

export const Content = async ({ id }: ContentProps) => {
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
          images={images}
          name={name}
          price={price}
          sizes={sizes}
          colors={colors}
          categoryName={categoryName}
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
          <p className="text-[28px] font-bold text-text-secondary font-core-sans-c">
            Product Description
          </p>
        </div>

        <div className="space-y-7.5">
          <p
            className={cn(
              'text-lg font-causten font-medium text-text-secondary',
              'underline decoration-border-primary decoration-[1.4px] underline-offset-[18px]',
            )}
          >
            Description
          </p>

          <p className="text-text-primary font-causten font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
