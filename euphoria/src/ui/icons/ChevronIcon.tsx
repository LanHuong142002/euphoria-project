import { SvgFactory, SvgFactoryProps } from './SvgFactory';

// Utils
import { cn } from '@/utils';

export const ChevronRightIcon = ({
  width = '7',
  height = '13',
  className,
  ...props
}: SvgFactoryProps) => (
  <SvgFactory
    fill="none"
    viewBox="0 0 7 13"
    width={width}
    height={height}
    className={cn('stroke-icon-primary', className)}
    {...props}
  >
    <path
      d="M1 11.7415L5.73782 7.00373C6.08739 6.65416 6.08739 6.08739 5.73782 5.73782L1 1"
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </SvgFactory>
);
