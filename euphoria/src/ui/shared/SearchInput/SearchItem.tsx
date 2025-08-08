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

export const SearchItem = ({ product, onClose }: SearchItemProps) => (
  <Link
    href={ROUTES.PRODUCT_DETAILS(product.id)}
    className="flex items-center gap-3 px-4 py-3 hover:bg-background-tertiary text-text-secondary transition-colors"
    onClick={onClose}
  >
    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
      <Image
        src={product.attributes.images[0] || ''}
        alt={product.attributes.name}
        className="w-full h-full object-cover"
        classNameWrapper="w-full h-full"
      />
    </div>
    <div className="flex-1 min-w-0">
      <Typography fontWeight="medium" fontSize="sm" className="truncate">
        {product.attributes.name}
      </Typography>
      <Typography fontWeight="medium" fontSize="sm">
        ${product.attributes.price.toFixed(2)}
      </Typography>
    </div>
  </Link>
);
