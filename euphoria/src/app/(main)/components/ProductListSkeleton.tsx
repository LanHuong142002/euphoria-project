import { Skeleton } from '@/ui/components/common/Skeleton';

export const ProductListSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12.5 max-w-4xl mx-auto justify-items-center">
    {Array.from({ length: 12 }, (_, index) => index).map((index) => (
      <div key={index} className="w-full max-w-[282px] flex-shrink-0">
        <Skeleton className="w-full h-[370px] rounded-xl" />

        <div className="flex pt-7.5">
          <div className="flex-1 min-w-0 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <div className="ml-2">
            <Skeleton className="h-6 w-16 rounded-lg" />
          </div>
        </div>
      </div>
    ))}
  </div>
);
