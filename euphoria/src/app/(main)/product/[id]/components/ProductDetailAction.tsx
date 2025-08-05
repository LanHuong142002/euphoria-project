'use client';

import { useState } from 'react';

// Components
import { SelectSize } from './SelectSize';
import { SelectColors } from './SelectColors';
import { Badge } from '@/ui/components/common/Badge';
import { Image } from '@/ui/components/common/Image';
import { Button } from '@/ui/components/common/Button';
import { ProductBreadcrumb } from './ProductBreadcrumb';
import { Separator } from '@/ui/components/common/Separator';

// Icons
import { CardIcon } from '@/ui/icons/CardIcon';
import { ShirtIcon } from '@/ui/icons/ShirtIcon';
import { TruckIcon } from '@/ui/icons/TruckIcon';
import { ReturnIcon } from '@/ui/icons/ReturnIcon';
import { ShoppingCartIcon } from '@/ui/icons/ShoppingCartIcon';

// Contexts
import { useCart } from '@/contexts';

// Utils
import { cn } from '@/utils';

const PRODUCT_BADGES = [
  {
    name: 'Secure payment',
    icon: <CardIcon />,
  },
  {
    name: 'Size & Fit',
    icon: <ShirtIcon />,
  },
  {
    name: 'Free shipping',
    icon: <TruckIcon />,
  },
  {
    name: 'Free Shipping & Returns',
    icon: <ReturnIcon />,
  },
];

interface ProductDetailActionProps {
  price: number;
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
}: ProductDetailActionProps) => {
  const { addItem } = useCart();

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
        <div className="flex flex-row lg:flex-col gap-[23px] justify-center p-4 lg:p-0">
          {images.map((image: string, index: number) => {
            const isSelected = selectedImage === index;

            const handleImageClick = () => {
              handleImageChange(index);
            };

            return (
              <div
                key={index}
                className={cn(
                  'w-17 h-17 rounded-xl overflow-hidden cursor-pointer transition-all duration-200',
                  isSelected
                    ? 'border-1 border-border-secondary p-1 bg-gray-100 hover:border-purple-500'
                    : 'border-1 border-transparent hover:border-purple-500',
                )}
                onClick={handleImageClick}
              >
                <div
                  className={cn(
                    'w-full h-full rounded-lg overflow-hidden',
                    isSelected && 'border border-gray-400',
                  )}
                >
                  <Image
                    src={image}
                    alt={`${name} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                    classNameWrapper="w-full h-full"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:flex-1 relative w-full lg:w-[520px] h-[785px] overflow-hidden">
          <Image
            src={images[selectedImage] || ''}
            alt={name}
            className="w-full h-full object-cover"
            classNameWrapper="w-full h-full"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="pl-4 lg:pl-[74px] py-7.5 space-y-4 lg:space-y-[35px]">
        <div className="hidden lg:block">
          <ProductBreadcrumb categoryName={categoryName} />
        </div>

        <h1 className="text-[34px] font-bold text-text-secondary font-core-sans-c">
          {name}
        </h1>

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
            <ShoppingCartIcon className="stroke-icon-secondary" />
            Add to cart
          </Button>
          <Badge variant="outline" className="font-bold text-lg">
            ${price.toFixed(2)}
          </Badge>
        </div>

        <Separator />
        <div className="grid grid-cols-2 gap-4">
          {PRODUCT_BADGES.map((badge) => (
            <div
              key={`${badge.name}-${badge.icon}`}
              className="flex items-center gap-[15px]"
            >
              <Badge variant="icon">{badge.icon}</Badge>
              <span className="font-causten text-sm lg:text-lg font-normal text-text-secondary leading-none">
                {badge.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
