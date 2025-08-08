// Constants
import { PRODUCT_COLORS } from '@/constants';

// Components
import { Typography } from '@/ui/components/common/Typography';

// Utils
import { cn } from '@/utils';

interface SelectColorsProps {
  selectedColor: string;
  colors: string[];
  onColorChange: (color: string) => void;
}

export const SelectColors = ({
  colors,
  selectedColor,
  onColorChange,
}: SelectColorsProps) => (
  <div className="space-y-[25px]">
    <Typography fontWeight="semibold" fontSize="lg" color="secondary">
      Colors Available
    </Typography>

    <div className="flex gap-5" role="radiogroup" aria-required="true">
      {colors.map((color: string) => {
        const isSelected = selectedColor === color;
        const { border, value } =
          PRODUCT_COLORS.find((c) => c.name === color) || {};
        const handleColorChange = () => {
          onColorChange(color);
        };

        return (
          <button
            type="button"
            key={`color-${color}`}
            onClick={handleColorChange}
            className={cn(
              'w-7.5 h-7.5 rounded-full border-2 transition-all duration-200 inset-shadow-sm',
              isSelected ? `${border} p-1` : 'border-border-tertiary p-0',
            )}
            role="radio"
            aria-checked={isSelected}
            aria-label={`Select ${color} color`}
            title={`${color} ${isSelected ? '(selected)' : ''}`}
          >
            <div className={cn('w-full h-full rounded-full', value)} />
          </button>
        );
      })}
    </div>
  </div>
);
