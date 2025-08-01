import Link from 'next/link';

// Actions
import { getProducts } from '@/actions';

// Constants
import { ROUTES } from '@/constants';

// Components
import { ProductItem } from '@/ui/components/ProductItem';
import { ListEmpty } from '@/ui/shared/List/ListEmpty';

// Types
import { Product, ProductFilterParams } from '@/types';

export interface ProductListProps {
  products: Product[];
}

export const ProductList = async ({
  searchParams,
}: {
  searchParams: Promise<ProductFilterParams>;
}) => {
  const params = await searchParams;
  const { data: products, error } = await getProducts(params);

  return (
    <div>
      {error ? (
        <ListEmpty description={error} isError />
      ) : products.length === 0 ? (
        <ListEmpty description="No products found" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 pt-12.5 max-w-4xl mx-auto justify-items-center">
          {products.map(
            ({ attributes: { name, brand, price, images }, id }) => (
              <Link
                key={`product-${id}`}
                href={ROUTES.PRODUCT_DETAILS(id)}
                className="w-full max-w-[282px] flex-shrink-0"
              >
                <ProductItem
                  name={name}
                  brand={brand}
                  price={price}
                  image={images[0]}
                />
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  );
};
