import { Suspense } from 'react';

// Components
import { PriceRange } from './PriceRange';
import { Categories } from './Categories';
import { CategoriesSkeleton } from './CategoriesSkeleton';
import { Separator } from '@/ui/components/common/Separator';

// Icons
import { FilterIcon } from '@/ui/icons/FilterIcon';

// Types
import { Product } from '@/types/product';

// Utils
import { cn } from '@/utils';

export interface FilterProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
  className?: string;
}

export const Filter = () => {
  return (
    <div
      className={cn(
        'w-full max-w-sm bg-background-primary border border-border-primary',
      )}
    >
      <div className="flex items-center justify-between py-5 px-7.5">
        <h2 className="text-2xl font-bold text-text-primary">Filter</h2>
        <FilterIcon className="w-6 h-6 text-icon-primary" />
      </div>
      <Separator />

      <div className="py-[35px]">
        <Suspense fallback={<CategoriesSkeleton />}>
          <Categories />
        </Suspense>
      </div>

      <Separator />

      <PriceRange />
    </div>
  );
};
