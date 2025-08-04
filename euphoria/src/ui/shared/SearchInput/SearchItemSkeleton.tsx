import { Skeleton } from '@/ui/components/common/Skeleton';

export const SearchItemSkeleton = () => (
  <div className="flex items-center gap-3">
    <Skeleton className="w-12 h-12 rounded-lg" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  </div>
);
