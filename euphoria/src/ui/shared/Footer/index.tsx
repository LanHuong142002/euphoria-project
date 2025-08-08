import { Typography } from '@/ui/components/common/Typography';

export const Footer = () => (
  <footer className="px-6 py-15 bg-background-secondary">
    <Typography
      fontWeight="bold"
      fontSize="sm"
      color="tertiary"
      className="container mx-auto text-center lg:text-lg"
    >
      Copyright &copy; {new Date().getFullYear()} Euphoria Folks Pvt Ltd. All
      rights reserved.
    </Typography>
  </footer>
);
