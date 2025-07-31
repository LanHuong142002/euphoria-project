import { z } from 'zod';

// Constants
import { ERROR_MESSAGES, REGEX_EMAIL, REGEX_PASSWORD } from '@/constants';

export const validateRequiredString = z.string({
  message: ERROR_MESSAGES.REQUIRED,
});

export const validateEmail = validateRequiredString.regex(REGEX_EMAIL, {
  message: ERROR_MESSAGES.INVALID_EMAIL,
});

export const validatePassword = validateRequiredString.regex(REGEX_PASSWORD, {
  message: ERROR_MESSAGES.INVALID_PASSWORD,
});
