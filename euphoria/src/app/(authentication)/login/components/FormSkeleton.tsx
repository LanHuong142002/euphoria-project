import { Skeleton } from '@/ui/components/common/Skeleton';

export const FormSkeleton = () => (
  <div className="mt-8 space-y-7.5">
    <div className="space-y-7.5">
      <div className="space-y-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-11 w-full" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-11 w-full" />
      </div>
    </div>

    <div>
      <Skeleton className="h-11 w-30" />
    </div>
  </div>
);
