'use client';

import { Control, FieldValues, FieldPath } from 'react-hook-form';

// Components
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Input,
  InputProps,
} from '../common';

interface InputControllerProps<T extends FieldValues> {
  label?: string;
  description?: string;
  placeholder?: string;
  name: FieldPath<T>;
  control: Control<T>;
  inputProps?: Omit<
    InputProps,
    'error' | 'label' | 'placeholder' | 'helperText'
  >;
}

export const InputController = <T extends FieldValues>({
  name,
  control,
  description,
  inputProps,
  label,
  placeholder,
}: InputControllerProps<T>) => (
  <FormField
    name={name}
    control={control}
    render={({ field, fieldState }) => (
      <FormItem>
        <FormControl>
          <Input
            {...field}
            {...inputProps}
            error={fieldState.error?.message}
            label={label}
            placeholder={placeholder}
          />
        </FormControl>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
);
