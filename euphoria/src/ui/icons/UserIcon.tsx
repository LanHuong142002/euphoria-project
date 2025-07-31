import { SvgFactory, SvgFactoryProps } from './SvgFactory';

// Utils
import { cn } from '@/utils';

export const UserIcon = ({
  size = '20',
  className,
  ...props
}: SvgFactoryProps) => (
  <SvgFactory
    fill="none"
    viewBox="0 0 20 20"
    size={size}
    className={cn('stroke-icon-primary', className)}
    {...props}
  >
    <path
      d="M10 11.6667C12.3012 11.6667 14.1667 9.8012 14.1667 7.50001C14.1667 5.19882 12.3012 3.33334 10 3.33334C7.69885 3.33334 5.83337 5.19882 5.83337 7.50001C5.83337 9.8012 7.69885 11.6667 10 11.6667ZM10 11.6667C6.31814 11.6667 3.33337 13.9053 3.33337 16.6667M10 11.6667C13.6819 11.6667 16.6667 13.9053 16.6667 16.6667"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </SvgFactory>
);
