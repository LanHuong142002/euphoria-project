import { z } from 'zod';

import { validateEmail, validateRequired } from './validate';

export const loginSchema = z.object({
  email: validateEmail,
  password: validateRequired,
});
