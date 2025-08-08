'use client';

import { KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

// Constants
import { PRODUCT_BADGES, ROUTES } from '@/constants';

// Components
import { SelectSize } from './SelectSize';
import { SelectColors } from './SelectColors';
import { Badge } from '@/ui/components/common/Badge';
import { Image } from '@/ui/components/common/Image';
import { Button } from '@/ui/components/common/Button';
import { ProductBreadcrumb } from './ProductBreadcrumb';
import { Separator } from '@/ui/components/common/Separator';
import { Typography } from '@/ui/components/common/Typography';

// Icons
import { ShoppingCartIcon } from '@/ui/icons/ShoppingCartIcon';

// Contexts
import { useCart } from '@/contexts';

// Utils
import { cn } from '@/utils';

interface ProductDetailActionProps {
  price: number;
  isAuthenticated: boolean;
  id: string;
  name: string;
  categoryName: string;
  sizes: string[];
  colors: string[];
  images: string[];
}

export const ProductDetailAction = ({
  id,
  images,
  name,
  price,
  sizes,
  colors,
  categoryName,
  isAuthenticated,
}: ProductDetailActionProps) => {
  const { addItem } = useCart();
  const { replace } = useRouter();

  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleImageChange = (index: number) => {
    setSelectedImage(index);
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      replace(`${ROUTES.LOGIN}?backTo=${ROUTES.PRODUCT_DETAILS(id)}`);
      return;
    }

    addItem({
      product: id,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    });
  };

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 z-10">
      <div className="container block lg:hidden p-4">
        <ProductBreadcrumb categoryName={categoryName} />
      </div>

      {/* Product Images */}
      <div className="flex flex-col-reverse lg:flex-row lg:gap-8.5">
        <div
          className="flex flex-row lg:flex-col gap-[23px] justify-center p-4 lg:p-0"
          aria-label="Product image thumbnails"
        >
          {images.map((image: string, index: number) => {
            const isSelected = selectedImage === index;

            const handleImageClick = () => {
              handleImageChange(index);
            };

            const handleKeyDown = (e: KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleImageChange(index);
              }
            };

            return (
              <button
                key={index}
                aria-pressed={isSelected}
                aria-controls="main-product-image"
                aria-label={`View image ${index + 1} of ${images.length} of ${name}`}
                className={cn(
                  'w-17 h-17 rounded-xl overflow-hidden cursor-pointer transition-all duration-200',
                  isSelected
                    ? 'border-1 border-border-secondary p-1 bg-gray-100 hover:border-purple-500'
                    : 'border-1 border-transparent hover:border-purple-500',
                )}
                onClick={handleImageClick}
                onKeyDown={handleKeyDown}
              >
                <div
                  className={cn(
                    'w-full h-full rounded-lg overflow-hidden',
                    isSelected && 'border border-gray-400',
                  )}
                >
                  <Image
                    src={image}
                    alt={`${name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    classNameWrapper="w-full h-full"
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="lg:flex-1 relative w-full lg:w-[520px] h-[785px] overflow-hidden">
          <Image
            id="main-product-image"
            src={images[selectedImage] || ''}
            alt={`${name} - main product image showing ${selectedImage + 1} of ${images.length}`}
            className="w-full h-full object-cover"
            classNameWrapper="w-full h-full"
          />
        </div>
      </div>

      {/* Product Info */}
      <section
        className="pl-4 lg:pl-[74px] py-7.5 space-y-4 lg:space-y-[35px]"
        aria-labelledby="product-details-title"
      >
        <div className="hidden lg:block">
          <ProductBreadcrumb categoryName={categoryName} />
        </div>

        <Typography
          id="product-details-title"
          as="h1"
          fontFamily="coreSans"
          fontWeight="bold"
          fontSize="34px"
          color="secondary"
        >
          {name}
        </Typography>

        <SelectSize
          sizes={sizes}
          selectedSize={selectedSize}
          onSizeChange={handleSizeChange}
        />

        <SelectColors
          colors={colors}
          selectedColor={selectedColor}
          onColorChange={handleColorChange}
        />

        <div className="flex items-center gap-4">
          <Button
            color="primary"
            onClick={handleAddToCart}
            variant="primary"
            disabled={!selectedSize || !selectedColor}
          >
            <ShoppingCartIcon
              className="stroke-icon-secondary"
              aria-hidden="true"
            />
            Add to cart
          </Button>
          <Badge
            variant="outline"
            className="font-bold text-lg"
            aria-label={`Price: $${price.toFixed(2)}`}
          >
            ${price.toFixed(2)}
          </Badge>
        </div>

        <Separator aria-hidden="true" />

        <div className="grid grid-cols-2 gap-4" role="list">
          {PRODUCT_BADGES.map(({ icon: Icon, name }) => (
            <div
              key={`${name}-badge`}
              className="flex items-center gap-[15px]"
              role="listitem"
            >
              <Badge variant="icon" aria-hidden="true">
                <Icon />
              </Badge>
              <Typography
                as="span"
                fontSize="sm"
                className="lg:text-lg leading-none"
                color="secondary"
              >
                {name}
              </Typography>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
