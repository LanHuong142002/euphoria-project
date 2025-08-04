// Constants
import { PRODUCT_COLORS } from '@/constants';

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
    <p className="text-lg font-semibold font-causten text-text-secondary">
      Colors Available
    </p>

    <div className="flex gap-5">
      {colors.map((color: string) => {
        const isSelected = selectedColor === color;
        const { border, value } =
          PRODUCT_COLORS.find((c) => c.name === color) || {};
        const handleColorChange = () => {
          onColorChange(color);
        };

        return (
          <button
            key={`color-${color}`}
            onClick={handleColorChange}
            className={cn(
              'w-7.5 h-7.5 rounded-full border-2 transition-all duration-200 inset-shadow-sm',
              isSelected ? `${border} p-1` : 'border-border-tertiary p-0',
            )}
            title={color}
          >
            <div className={cn('w-full h-full rounded-full', value)} />
          </button>
        );
      })}
    </div>
  </div>
);
