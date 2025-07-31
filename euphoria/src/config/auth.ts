import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

// Services
import { httpClient } from '@/services';

// Constants
import { API_ENDPOINT } from '@/constants';

// Config
import { authConfig } from './auth.config';

// Types
import { AuthPayload, AuthResponse } from '@/types';

const CredentialsProvider = Credentials({
  credentials: {
    email: { label: 'Email', type: 'email' },
    password: { label: 'Password', type: 'password' },
  },
  /**
   * Authenticates the user and returns the user data and JWT if successful.
   *
   * @param {Record<string, string> | undefined} credentials - The user credentials.
   * @returns {Promise<AuthPayload | null>} The user data and JWT if successful, otherwise null.
   */
  authorize: async (
    credentials: Partial<Record<'email' | 'password', unknown>>,
    _req,
  ) => {
    if (!credentials) return null;

    const email =
      typeof credentials.email === 'string' ? credentials.email : '';
    const password =
      typeof credentials.password === 'string' ? credentials.password : '';
    const payload = {
      identifier: email,
      email,
      password,
    };

    const response = await httpClient.post<AuthResponse, AuthPayload>({
      endpoint: API_ENDPOINT.SIGN_IN,
      body: payload,
    });

    const { user, jwt } = response;

    return user ? { ...user, jwt } : null;
  },
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  providers: [CredentialsProvider],
});
