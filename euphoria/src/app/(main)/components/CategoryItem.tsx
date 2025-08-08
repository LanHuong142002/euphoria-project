'use client';

// Icons
import { ChevronRightIcon } from '@/ui/icons/ChevronIcon';

// Hooks
import { useGetParams } from '@/hooks';

// Utils
import { cn } from '@/utils';

interface CategoryItemProps {
  value: string;
  label: string;
}

export const CategoryItem = ({ value, label }: CategoryItemProps) => {
  const { params, router } = useGetParams();

  const isActive = params.get('category') === value;

  const handleClick = () => {
    params.set('category', value);
    params.set('categoryName', label);
    router.push(`?${params.toString()}`);
  };

  return (
    <button
      type="button"
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
