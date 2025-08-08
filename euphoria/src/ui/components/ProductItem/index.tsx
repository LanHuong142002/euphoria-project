import { ComponentProps } from 'react';

// Components
import { Image } from '../common/Image';
import { Badge } from '../common/Badge';
import { Typography } from '../common/Typography';

// Utils
import { formatPrice } from '@/utils';

export interface ProductItemProps
  extends Omit<ComponentProps<'div'>, 'children'> {
  name: string;
  brand: string;
  price: number;
  image: string;
}

export const ProductItem = ({
  name,
  brand,
  price,
  image,
  ...props
}: ProductItemProps) => (
  <div className="w-[282px] flex-shrink-0" {...props}>
    <div className="relative w-full h-[370px] rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={name}
        className="object-cover"
        classNameWrapper="w-full h-full"
      />
    </div>
    <div className="flex pt-7.5">
      <div className="flex-1 min-w-0">
        <Typography
          fontWeight="semibold"
          className="text-product-item-text truncate"
        >
          {name}
        </Typography>
        <Typography
          fontWeight="medium"
          fontSize="sm"
          className="text-product-item-brand truncate"
        >
          {brand}
        </Typography>
      </div>
      <div className="flex justify-between items-center ml-2">
        <Badge variant="default">{formatPrice(price)}</Badge>
      </div>
    </div>
  </div>
);
