'use client';

import { useState } from 'react';

// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/components/common/Accordion';
import { Badge } from '@/ui/components/common/Badge';
import { Slider } from '@/ui/components/common/Slider';

const MIN_PRICE = 0;
const MAX_PRICE = 1000;

export const PriceRange = () => {
  const [priceRange, setPriceRange] = useState<number[]>([
    MIN_PRICE,
    MAX_PRICE,
  ]);

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value);
  };

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="price"
      className="w-full py-5 px-7.5"
    >
      <AccordionItem value="price" className="border-none">
        <AccordionTrigger className="text-[22px] font-semibold text-text-primary hover:no-underline">
          Price
        </AccordionTrigger>
        <AccordionContent className="pt-15 space-y-5">
          <Slider
            min={MIN_PRICE}
            max={MAX_PRICE}
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
