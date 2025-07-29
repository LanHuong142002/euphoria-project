import { useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';
import { zodResolver } from '@hookform/resolvers/zod';
import { render, screen, waitFor } from '@testing-library/react';
import { z } from 'zod';

// Components
import { InputController } from '..';
import { Form } from '../../common';

// Component that renders InputController with form context
const TestInputController = ({
  label,
  name,
  description,
  inputProps,
  schema,
  defaultValues,
  onSubmit,
  showSubmitButton = false,
  placeholder,
}: {
  label: string;
  name: 'testField';
  description?: string;
  inputProps?: Record<string, unknown>;
  schema?: z.ZodObject<{
    testField: z.ZodString;
  }>;
  defaultValues?: { testField: string };
  onSubmit?: (data: { testField: string }) => void;
  showSubmitButton?: boolean;
  placeholder?: string;
}) => {
  const form = useForm({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: defaultValues || { testField: '' },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => onSubmit?.(data))}>
        <InputController
          label={label}
          name={name}
          control={form.control}
          description={description}
          placeholder={placeholder}
          inputProps={inputProps}
        />
        {showSubmitButton && <button type="submit">Submit</button>}
      </form>
    </Form>
  );
};

describe('InputController component', () => {
  test('Should render input with label', () => {
    render(<TestInputController label="Test Label" name="testField" />);

    expect(screen.getByText('Test Label')).toBeDefined();
  });

  test('Should render input with description', () => {
    render(
      <TestInputController
        label="Test Label"
        name="testField"
        description="This is a description"
      />,
    );

    expect(screen.getByText('This is a description')).toBeDefined();
  });

  test('Should render input with placeholder', () => {
    render(
      <TestInputController
        label="Test Label"
        name="testField"
        placeholder="Enter test value"
      />,
    );

    expect(screen.getByPlaceholderText('Enter test value')).toBeDefined();
  });

  test('Should display error message when validation fails', async () => {
    const errorMessage = 'Must be at least 2 characters';
    const user = userEvent.setup();
    const schema = z.object({
      testField: z.string().min(2, errorMessage),
    });

    render(
      <TestInputController
        label="Test Label"
        name="testField"
        schema={schema}
        showSubmitButton={true}
      />,
    );

    const submitButton = screen.getByText('Submit');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeDefined();
    });
  });

  test('Should handle disabled state', () => {
    render(
      <TestInputController
        label="Test Label"
        name="testField"
        inputProps={{ disabled: true }}
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  test('Should handle different input types', () => {
    render(
      <TestInputController
        label="Email"
        name="testField"
        inputProps={{ type: 'email' }}
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  test('Should call onChange when user types', async () => {
    const user = userEvent.setup();

    render(<TestInputController label="Test Label" name="testField" />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test');

    expect(input).toHaveValue('test');
  });

  test('Should handle form submission with valid data', async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    const schema = z.object({
      testField: z.string().min(1, 'This field is required'),
    });

    render(
      <TestInputController
        label="Test Label"
        name="testField"
        schema={schema}
        onSubmit={onSubmit}
        showSubmitButton={true}
      />,
    );

    const input = screen.getByRole('textbox');
    const submitButton = screen.getByText('Submit');

    await user.type(input, 'test value');
    await user.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({ testField: 'test value' });
    });
  });

  test('Should not submit form with invalid data', async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    const schema = z.object({
      testField: z.string().min(2, 'Must be at least 2 characters'),
    });

    render(
      <TestInputController
        label="Test Label"
        name="testField"
        schema={schema}
        onSubmit={onSubmit}
        showSubmitButton={true}
      />,
    );

    const submitButton = screen.getByText('Submit');
    await user.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });

  test('Should handle autoComplete prop', () => {
    render(
      <TestInputController
        label="Email"
        name="testField"
        inputProps={{ autoComplete: 'email' }}
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('autoComplete', 'email');
  });

  test('Should handle required prop', () => {
    render(
      <TestInputController
        label="Required Field"
        name="testField"
        inputProps={{ required: true }}
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeRequired();
  });
});
