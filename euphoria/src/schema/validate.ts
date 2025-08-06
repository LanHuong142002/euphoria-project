import { z } from 'zod';

// Constants
import { ERROR_MESSAGES, REGEX_EMAIL, REGEX_PASSWORD } from '@/constants';

export const validateRequired = z.string({
  message: ERROR_MESSAGES.REQUIRED,
});

export const validateEmail = validateRequired.regex(REGEX_EMAIL, {
  message: ERROR_MESSAGES.INVALID_EMAIL,
});

export const validatePassword = validateRequired.regex(REGEX_PASSWORD, {
  message: ERROR_MESSAGES.INVALID_PASSWORD,
});
