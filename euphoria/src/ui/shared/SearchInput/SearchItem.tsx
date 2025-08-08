import Link from 'next/link';

// Components
import { Image } from '@/ui/components/common/Image';
import { Typography } from '@/ui/components/common/Typography';

// Constants
import { ROUTES } from '@/constants';

// Types
import { Product } from '@/types';

interface SearchItemProps {
  product: Product;
  onClose: () => void;
}

export const SearchItem = ({ product, onClose }: SearchItemProps) => {
  const { attributes, id } = product || {};
  const { name = '', price = 0, images = [] } = attributes || {};

  return (
    <Link
      href={ROUTES.PRODUCT_DETAILS(id)}
      className="flex items-center gap-3 px-4 py-3 hover:bg-background-tertiary text-text-secondary transition-colors focus:bg-background-tertiary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-button-primary"
      onClick={onClose}
      role="option"
      aria-label={`View details for ${name} - $${price.toFixed(2)}`}
    >
      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={images[0] || ''}
          alt={`${name} product image`}
          className="w-full h-full object-cover"
          classNameWrapper="w-full h-full"
        />
      </div>
      <div className="flex-1 min-w-0">
        <Typography fontWeight="medium" fontSize="sm" className="truncate">
          {name}
        </Typography>
        <Typography fontWeight="medium" fontSize="sm">
          ${price.toFixed(2)}
        </Typography>
      </div>
    </Link>
  );
};
