import { CircleAlert, Frown } from 'lucide-react';

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
    <p className="font-core-sans-c text-[34px] text-text-primary font-bold pt-3.5">
      Oops...<span className="font-causten">!</span>
    </p>
    <p className="font-causten text-center text-md text-text-primary font-medium">
      {description}
    </p>
  </div>
);
