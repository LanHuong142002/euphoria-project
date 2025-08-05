// Components
import { CartBreadcrumb } from './CartBreadcrumb';
import { TableHeader } from './TableHeader';
import { Skeleton } from '@/ui/components/common/Skeleton';
import { cn } from '@/utils';

export const CartSkeleton = () => (
  <div className="pb-25">
    {/* Breadcrumb Skeleton */}
    <div className="container mx-auto py-[50px] px-4">
      <CartBreadcrumb />
    </div>

    <div>
      <TableHeader />

      {/* Cart Items Skeleton */}
      <div className="container mx-auto pt-5 pb-25">
        {Array.from({ length: 3 }).map((_, index) => {
          const isLastItem = index === 2;

          return (
            <div
              key={index}
              className={cn(
                'py-12.5 px-4',
                !isLastItem && 'border-b border-cart-item-border',
              )}
            >
              <div className="grid grid-cols-6 gap-4 items-center">
                {/* Product Details */}
                <div className="col-span-4 md:col-span-2">
                  <div className="flex items-center space-x-4">
                    {/* Product Image */}
                    <Skeleton className="w-20 h-20 md:w-[105px] md:h-[120px] rounded-xl" />

                    {/* Product Info */}
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-24" />
                      <div className="flex space-x-2">
                        <Skeleton className="h-3 w-16" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="hidden md:block">
                  <div className="flex justify-center">
                    <Skeleton className="h-6 w-16 mx-auto" />
                  </div>
                </div>

                {/* Quantity */}
                <div className="hidden md:block">
                  <div className="flex justify-center">
                    <Skeleton className="h-10 w-[108px] rounded" />
                  </div>
                </div>

                {/* Subtotal */}
                <div className="hidden md:block">
                  <div className="flex justify-center">
                    <Skeleton className="h-6 w-20 mx-auto" />
                  </div>
                </div>

                {/* Action */}
                <div className="text-end hidden md:block">
                  <Skeleton className="h-8 w-8 rounded ml-auto" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Order Summary Skeleton */}
      <div className="bg-background-tertiary px-4 lg:px-0">
        <div className="container mx-auto pt-10 pb-12.5">
          <div className="space-y-[15px]">
            {/* Sub Total */}
            <div className="flex justify-between">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-20" />
            </div>

            {/* Shipping */}
            <div className="flex justify-between">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-16" />
            </div>

            {/* Grand Total */}
            <div className="flex justify-between pt-[25px]">
              <Skeleton className="h-7 w-28" />
              <Skeleton className="h-7 w-24" />
            </div>
          </div>

          {/* Separator */}
          <div className="my-[50px]">
            <Skeleton className="h-px w-full" />
          </div>

          {/* Checkout Button */}
          <div className="flex justify-end">
            <Skeleton className="h-12 w-48 rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
