// Components
import { Skeleton } from '@/ui/components/common/Skeleton';

export const ProductDetailSkeleton = () => (
  <div className="pb-[100px]">
    <div className="relative">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 z-10">
        {/* Mobile Breadcrumb Skeleton */}
        <div className="container block lg:hidden p-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>

        {/* Product Images Skeleton */}
        <div className="flex flex-col-reverse lg:flex-row lg:gap-8.5">
          {/* Thumbnail Images Skeleton */}
          <div className="flex flex-row lg:flex-col gap-[23px] justify-center p-4 lg:p-0">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="w-17 h-17 rounded-xl" />
            ))}
          </div>

          {/* Main Product Image Skeleton */}
          <div className="lg:flex-1 relative w-full lg:w-[520px] h-[785px] overflow-hidden">
            <Skeleton className="w-full h-full" />
          </div>
        </div>

        {/* Product Info Skeleton */}
        <div className="pl-4 lg:pl-[74px] py-9 space-y-4 lg:space-y-[34px]">
          {/* Desktop Breadcrumb Skeleton */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-12" />
              <Skeleton className="h-5 w-4" />
              <Skeleton className="h-5 w-20" />
            </div>
          </div>

          {/* Product Title Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-14 w-3/4" />
          </div>

          {/* Size Selection Skeleton */}
          <div className="space-y-[30px]">
            <Skeleton className="h-5 w-22" />
            <div className="flex gap-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-9.5 w-9.5 rounded-lg" />
              ))}
            </div>
          </div>

          {/* Color Selection Skeleton */}
          <div className="space-y-[30px]">
            <Skeleton className="h-6 w-30" />
            <div className="flex gap-5">
              {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="h-8 w-8 rounded-full" />
              ))}
            </div>
          </div>

          {/* Add to Cart Button and Price Skeleton */}
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-44 rounded-lg" />
            <Skeleton className="h-12 w-30 rounded-md" />
          </div>

          {/* Separator */}
          <div className="h-px bg-gray-200" />

          {/* Product Badges Skeleton */}
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-center gap-[15px]">
                <Skeleton className="h-11 w-11 rounded-full" />
                <Skeleton className="h-4 w-26" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Split Skeleton */}
      <div className="absolute top-0 left-0 w-full h-full z-[-2] hidden lg:flex">
        <div className="bg-background-tertiary w-1/2 h-full" />
        <div className="w-1/2 h-full" />
      </div>
    </div>

    {/* Product Description Skeleton */}
    <div className="pl-4 lg:pl-0 container mx-auto mt-5 lg:mt-[100px]">
      <div className="flex items-stretch gap-[15px] mb-7.5">
        <Skeleton className="w-[6px] rounded-xl" />
        <Skeleton className="h-10 w-56" />
      </div>

      <div className="space-y-7.5">
        <Skeleton className="h-8 w-24" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  </div>
);
