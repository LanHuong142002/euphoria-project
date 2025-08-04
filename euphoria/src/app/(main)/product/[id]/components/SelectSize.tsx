// Components
import { Toggle } from '@/ui/components/common/Toggle';

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
    <p className="text-lg font-semibold font-causten text-text-secondary">
      Select Size
    </p>

    <div className="flex gap-5">
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
          >
            {size.toUpperCase()}
          </Toggle>
        );
      })}
    </div>
  </div>
);
