'use client';

import { useState, useTransition } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Actions
import { login } from '@/actions';

// Constants
import { ROUTES } from '@/constants';

// Schema
import { loginSchema } from '@/schema';

// Components
import { Button } from '@/ui/components/common/Button';
import { InputController } from '@/ui/components/InputController';
import { Form as FormComponent } from '@/ui/components/common/Form';

// Hooks
import { useGetParams } from '@/hooks';

export const Form = () => {
  const { searchParams, router } = useGetParams();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (data: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      const backTo = searchParams.get('backTo');
      const error = await login(data);

      if (error) {
        return setError(error);
      }

      return backTo ? router.replace(backTo) : router.replace(ROUTES.HOME);
    });
  };

  return (
    <FormComponent {...form}>
      <form className="space-y-7.5" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="space-y-7.5">
          <InputController
            name="email"
            control={form.control}
            label="User name or email address"
            placeholder="Enter your email"
          />
          <InputController
            name="password"
            inputProps={{
              type: 'password',
              showPasswordToggle: true,
            }}
            control={form.control}
            label="Password"
            placeholder="Enter your password"
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        )}

        <div>
          <Button
            type="submit"
            color="primary"
            variant="primary"
            fontSize="xs"
            className="text-xs sm:text-sm w-full lg:w-auto"
            isLoading={isPending}
          >
            Sign In
          </Button>
        </div>
      </form>
    </FormComponent>
  );
};
