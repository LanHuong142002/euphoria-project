import { CircleAlert, Frown } from 'lucide-react';

// Components
import { Typography } from '@/ui/components/common/Typography';

interface ListEmptyProps {
  isError?: boolean;
  description: string;
}

export const ListEmpty = ({ description, isError }: ListEmptyProps) => (
  <div className="w-full flex flex-col justify-center items-center min-h-[500px]">
    {isError ? (
      <CircleAlert size={60} className="text-icon-error" />
    ) : (
      <Frown size={60} className="text-icon-primary" />
    )}
    <Typography
      fontFamily="coreSans"
      fontWeight="bold"
      fontSize="34px"
      className="pt-3.5"
    >
      Oops...
      <Typography as="span">!</Typography>
    </Typography>
    <Typography fontWeight="medium" className="text-center">
      {description}
    </Typography>
  </div>
);
