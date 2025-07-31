import { z } from 'zod';

import { validateEmail, validateRequiredString } from './validate';

export const loginSchema = z.object({
  email: validateEmail,
  password: validateRequiredString,
});
