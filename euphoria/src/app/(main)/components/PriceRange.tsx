'use client';

import { useState, useEffect } from 'react';

// Constants
import { PRODUCT_PRICE_RANGE, TIMING } from '@/constants';

// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/components/common/Accordion';
import { Badge } from '@/ui/components/common/Badge';
import { Slider } from '@/ui/components/common/Slider';

// Hooks
import { useDebounce, useGetParams } from '@/hooks';

export const PriceRange = () => {
  const { params, router, searchParams } = useGetParams();
  const priceFrom = Number(params.get('priceFrom')) || PRODUCT_PRICE_RANGE.MIN;
  const priceTo = Number(params.get('priceTo')) || PRODUCT_PRICE_RANGE.MAX;

  const [priceRange, setPriceRange] = useState<number[]>([priceFrom, priceTo]);
  const debouncedPriceRange = useDebounce(priceRange, TIMING.DEBOUNCE_DELAY);

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value);
  };

  // Update URL when debounced value changes
  useEffect(() => {
    if (
      debouncedPriceRange[0] !== priceFrom ||
      debouncedPriceRange[1] !== priceTo
    ) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('priceFrom', debouncedPriceRange[0].toString());
      newParams.set('priceTo', debouncedPriceRange[1].toString());
      router.push(`?${newParams.toString()}`);
    }
  }, [debouncedPriceRange, router, searchParams, priceFrom, priceTo]);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full lg:py-2 lg:py-5 px-7.5"
    >
      <AccordionItem value="price" className="border-none">
        <AccordionTrigger className="text-[18px] lg:text-[22px] font-semibold text-text-primary hover:no-underline">
          Price
        </AccordionTrigger>
        <AccordionContent className="pt-5 lg:pt-15 space-y-5">
          <Slider
            min={PRODUCT_PRICE_RANGE.MIN}
            max={PRODUCT_PRICE_RANGE.MAX}
            value={priceRange}
            onRangeChange={handlePriceRangeChange}
            className="w-full"
          />

          <div className="flex justify-between">
            <Badge variant="outline">${priceRange[0]}</Badge>
            <Badge variant="outline">${priceRange[1]}</Badge>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
