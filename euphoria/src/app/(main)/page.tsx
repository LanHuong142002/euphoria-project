import { Suspense } from 'react';

// Components
import { Filter } from './components/Filter';
import { ProductList } from './components/ProductList';
import { ProductListSkeleton } from './components/ProductListSkeleton';

// Types
import { ProductFilterParams } from '@/types';

const MainPage = async ({
  searchParams,
}: {
  searchParams: Promise<ProductFilterParams>;
}) => {
  const params = await searchParams;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row pt-5 lg:pt-0">
        <div className="w-full lg:w-1/4">
          <Filter />
        </div>

        <div className="w-full lg:w-3/4 p-6 lg:p-12.5">
          <div className="max-w-[900px] mx-auto">
            <h1 className="text-[22px] font-semibold text-text-secondary">
              {params?.categoryName
                ? `${params.categoryName} Clothing`
                : 'All Products'}
            </h1>

            <Suspense fallback={<ProductListSkeleton />}>
              <ProductList searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
