// Components
import { Toggle } from '@/ui/components/common/Toggle';
import { Typography } from '@/ui/components/common/Typography';

interface SelectSizeProps {
  sizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export const SelectSize = ({
  sizes,
  selectedSize,
  onSizeChange,
}: SelectSizeProps) => (
  <div className="space-y-[25px]">
    <Typography fontWeight="semibold" fontSize="lg" color="secondary">
      Select Size
    </Typography>

    <div className="flex gap-5" role="radiogroup" aria-required="true">
      {sizes.map((size: string) => {
        const handleSizeChange = () => {
          onSizeChange(size);
        };

        return (
          <Toggle
            key={`size-${size}`}
            pressed={selectedSize === size}
            onPressedChange={handleSizeChange}
            size="sm"
            variant="default"
            role="radio"
            aria-checked={selectedSize === size}
            aria-label={`Size ${size.toUpperCase()}`}
          >
            {size.toUpperCase()}
          </Toggle>
        );
      })}
    </div>
  </div>
);
