'use client';

import { useRouter, useSearchParams } from 'next/navigation';

// Icons
import { ChevronRightIcon } from '@/ui/icons/ChevronIcon';

// Utils
import { cn } from '@/utils';

interface CategoryItemProps {
  value: string;
  label: string;
}

export const CategoryItem = ({ value, label }: CategoryItemProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const isActive = params.get('category') === value;

  const handleClick = () => {
    params.set('category', value);
    router.push(`?${params.toString()}`);
  };

  return (
    <button
      key={value}
      onClick={handleClick}
      className={cn(
        'py-[9px] cursor-pointer',
        'font-causten text-lg',
        'w-full flex items-center justify-between px-7.5 transition-colors',
        isActive
          ? 'bg-background-quaternary text-text-tertiary'
          : 'hover:bg-background-tertiary text-text-quinary',
      )}
    >
      {label}
      <ChevronRightIcon
        className={cn('size-4', isActive && 'stroke-icon-secondary')}
      />
    </button>
  );
};
