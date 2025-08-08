import { ComponentProps } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

// Components
import { Typography } from '../Typography';

// Utils
import { cn } from '@/utils';

const Breadcrumb = ({ ...props }: ComponentProps<'nav'>) => (
  <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
);

const BreadcrumbList = ({ className, ...props }: ComponentProps<'ol'>) => (
  <ol
    data-slot="breadcrumb-list"
    className={cn(
      'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-[10]',
      className,
    )}
    {...props}
  />
);

const BreadcrumbItem = ({ className, ...props }: ComponentProps<'li'>) => (
  <li
    data-slot="breadcrumb-item"
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
);

const BreadcrumbLink = ({
  asChild,
  className,
  ...props
}: ComponentProps<'a'> & {
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        'text-breadcrumb-primary transition-colors hover:opacity-80 font-medium text-lg',
        className,
      )}
      {...props}
    />
  );
};

const BreadcrumbPage = ({ className, ...props }: ComponentProps<'span'>) => (
  <span
    data-slot="breadcrumb-page"
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn(
      'text-breadcrumb-secondary font-normal font-medium text-lg',
      className,
    )}
    {...props}
  />
);

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: ComponentProps<'li'>) => (
  <li
    data-slot="breadcrumb-separator"
    data-testid="breadcrumb-separator"
    role="presentation"
    aria-hidden="true"
    className={cn('text-breadcrumb-primary', className)}
    {...props}
  >
    {children ?? <ChevronRight className="size-4" />}
  </li>
);

const BreadcrumbEllipsis = ({
  className,
  ...props
}: ComponentProps<'span'>) => (
  <span
    data-slot="breadcrumb-ellipsis"
    data-testid="breadcrumb-ellipsis"
    role="presentation"
    aria-hidden="true"
    className={cn('flex size-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="size-4" />
    <Typography as="span" className="sr-only">
      More
    </Typography>
  </span>
);

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
