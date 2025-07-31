'use server';

import { AuthError } from 'next-auth';

// Config
import { signIn } from '@/config';

// Constants
import { AUTH_METHOD, ERROR_MESSAGES, ERROR_TYPES } from '@/constants';

// Types
import { AuthPayload } from '@/types';

export const login = async (
  payload: AuthPayload,
): Promise<string | undefined> => {
  try {
    await signIn(AUTH_METHOD.CREDENTIALS, {
      ...payload,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case ERROR_TYPES.CREDENTIALS_SIGN_IN:
        case ERROR_TYPES.CALLBACK_ROUTE_ERROR:
          return ERROR_MESSAGES.EMAIL_PASSWORD_INVALID;

        default:
          return ERROR_MESSAGES.DEFAULT_API_ERROR;
      }
    }
  }
};
