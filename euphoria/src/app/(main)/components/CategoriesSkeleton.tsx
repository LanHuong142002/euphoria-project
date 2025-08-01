// Components
import { Skeleton } from '@/ui/components/common/Skeleton';

export const CategoriesSkeleton = () => {
  // Create an array of 8 skeleton items to match typical category count
  const skeletonItems = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div>
      {skeletonItems.map((index) => (
        <div
          key={index}
          className="py-[9px] w-full flex items-center justify-between px-7.5"
        >
          <Skeleton className="h-7 w-full" />
        </div>
      ))}
    </div>
  );
};
