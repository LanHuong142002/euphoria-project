'use client';

// Components
import { Button } from '@/ui/components/common/Button';

// Icons
import { GoogleIcon } from '@/ui/icons/GoogleIcon';
import { TwitterIcon } from '@/ui/icons/TwitterIcon';

export const ExternalLogin = () => (
  <div className="flex flex-col gap-5">
    <Button color="tertiary" disabled variant="tertiary">
      <GoogleIcon size="20" />
      Continue With Google
    </Button>
    <Button color="tertiary" disabled variant="tertiary">
      <TwitterIcon /> Continue With Twitter
    </Button>
  </div>
);
