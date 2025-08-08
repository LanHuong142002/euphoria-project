// Components
import { Button } from '@/ui/components/common/Button';

// Icons
import { GoogleIcon } from '@/ui/icons/GoogleIcon';
import { TwitterIcon } from '@/ui/icons/TwitterIcon';

export const ExternalLogin = () => (
  <div className="flex flex-col gap-5">
    <Button
      color="tertiary"
      disabled
      variant="tertiary"
      aria-label="Continue with Google (currently disabled)"
    >
      <GoogleIcon size="20" aria-hidden="true" />
      Continue With Google
    </Button>
    <Button
      color="tertiary"
      disabled
      variant="tertiary"
      aria-label="Continue with Twitter (currently disabled)"
    >
      <TwitterIcon aria-hidden="true" />
      Continue With Twitter
    </Button>
  </div>
);
