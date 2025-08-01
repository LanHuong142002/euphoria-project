import { SvgFactory, SvgFactoryProps } from './SvgFactory';

// Utils
import { cn } from '@/utils';

export const FilterIcon = ({
  width = '17',
  height = '20',
  className,
  ...props
}: SvgFactoryProps) => (
  <SvgFactory
    fill="none"
    viewBox="0 0 17 20"
    width={width}
    height={height}
    className={cn('stroke-icon-primary', className)}
    {...props}
  >
    <path
      d="M2.83333 6.33333L2.83333 1.75M2.83333 18.25L2.83333 10M13.8333 18.25L13.8333 10M8.33333 18.25V13.6667M8.33333 10V1.75M13.8333 6.33333L13.8333 1.75M1 6.33333H4.66667M6.5 13.6667H10.1667M12 6.33333L15.6667 6.33333"
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </SvgFactory>
);
