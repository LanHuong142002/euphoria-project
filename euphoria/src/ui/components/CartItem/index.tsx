import { ComponentProps } from 'react';

// Components
import { Image } from '../common/Image';
import { Typography } from '../common/Typography';
import { QuantitySelector } from '../QuantitySelector';

// Icons
import { TrashIcon } from '@/ui/icons/TrashIcon';

// Types
import { ProductCart } from '@/types';

// Utils
import { cn, formatPrice } from '@/utils';

export interface CartItemProps extends Omit<ComponentProps<'div'>, 'onChange'> {
  product: ProductCart;
  quantity?: number;
  disabled?: boolean;
  hasBorder?: boolean;
  onRemove?: () => void;
  onQuantityChange?: (quantity: number) => void;
}

export const CartItem = ({
  product,
  quantity = 1,
  onQuantityChange,
  onRemove,
  disabled = false,
  hasBorder = true,
  className,
  ...props
}: CartItemProps) => {
  const { name, color, size, price, images } = product;

  return (
    <article
      className={cn(
        'relative grid grid-cols-1 md:grid-cols-6 items-start md:items-center gap-4 py-12.5 px-4 md:pr-6.5 md:pl-2',
        hasBorder && 'border-b border-cart-item-border',
        disabled && 'opacity-50',
        className,
      )}
      role="group"
      aria-label={`Cart item: ${name}, Color: ${color}, Size: ${size}`}
      {...props}
    >
      {/* Product Details */}
      <div
        className="col-span-1 md:col-span-2 flex items-start gap-4"
        role="cell"
        aria-colindex={1}
      >
        <div className="relative w-20 h-20 md:w-[105px] md:h-[120px] rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={images[0]}
            alt={`${name} product image`}
            className="object-cover"
            classNameWrapper="w-full h-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <Typography
            fontWeight="bold"
            fontSize="base"
            className="text-cart-item-text md:text-lg mb-1 truncate"
          >
            {name}
          </Typography>
          <Typography
            fontWeight="medium"
            fontSize="xs"
            className="text-cart-item-placeholder md:text-sm mb-1"
          >
            Color: {color}
          </Typography>
          <Typography
            fontWeight="medium"
            fontSize="xs"
            className="text-cart-item-placeholder md:text-sm mb-2"
          >
            Size: {size}
          </Typography>

          {/* Quantity */}
          <div className="md:hidden">
            <QuantitySelector
              defaultValue={quantity}
              min={1}
              max={99}
              onChange={onQuantityChange}
              disabled={disabled}
            />
          </div>
        </div>
      </div>

      {/* Price */}
      <div
        className="hidden md:block text-center"
        role="cell"
        aria-colindex={2}
      >
        <Typography
          fontWeight="bold"
          fontSize="lg"
          className="text-cart-item-text pl-5"
        >
          {formatPrice(price)}
        </Typography>
      </div>

      {/* Quantity - Desktop only */}
      <div
        className="hidden md:flex justify-center"
        role="cell"
        aria-colindex={3}
      >
        <QuantitySelector
          defaultValue={quantity}
          min={1}
          max={99}
          onChange={onQuantityChange}
          disabled={disabled}
        />
      </div>

      {/* Subtotal */}
      <div
        className="hidden md:block text-center"
        role="cell"
        aria-colindex={4}
      >
        <Typography
          fontWeight="bold"
          fontSize="lg"
          className="text-cart-item-text pl-5"
        >
          {formatPrice(price * quantity)}
        </Typography>
      </div>

      <div
        role="cell"
        aria-colindex={5}
        className="absolute top-1/2 -translate-y-1/2 right-6 md:static md:flex md:justify-end md:items-center md:mt-2"
      >
        <button
          onClick={onRemove}
          disabled={disabled}
          aria-label="Remove item from cart"
          className="cursor-pointer"
        >
          <TrashIcon aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};
