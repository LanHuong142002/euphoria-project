import { Suspense } from 'react';

// Components
import { PriceRange } from './PriceRange';
import { Categories } from './Categories';
import { CategoriesSkeleton } from './CategoriesSkeleton';
import { Separator } from '@/ui/components/common/Separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/components/common/Accordion';

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
      <div className="hidden lg:block">
        <div className="flex items-center justify-between py-5 px-7.5">
          <h2 className="text-2xl font-bold text-text-primary">Filter</h2>
          <FilterIcon className="w-6 h-6 text-icon-primary" />
        </div>
        <Separator />
      </div>

      <div className="py-0 lg:py-[35px]">
        {/* Categories on Mobile */}
        <Accordion
          type="single"
          collapsible
          className="lg:hidden w-full px-7.5"
        >
          <AccordionItem value="categories" className="border-none">
            <AccordionTrigger className="text-[18px] lg:text-[22px] font-semibold text-text-primary hover:no-underline">
              Categories
            </AccordionTrigger>
            <AccordionContent>
              <Suspense fallback={<CategoriesSkeleton />}>
                <Categories />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Categories on Desktop */}
        <Suspense fallback={<CategoriesSkeleton />}>
          <div className="hidden lg:block">
            <Categories />
          </div>
        </Suspense>
      </div>

      <Separator />

      <PriceRange />
    </div>
  );
};
