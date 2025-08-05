// Config
import { auth } from '@/config';

// Constants
import { INIT_USER_SESSION } from '@/constants';

// Types
import { UserSession } from '@/types';

export const getUserFromSession = async (): Promise<Required<UserSession>> => {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return { ...INIT_USER_SESSION, ...session?.user, isAuthenticated };
};
