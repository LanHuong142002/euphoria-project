import '@testing-library/jest-dom';

jest.mock('next-auth', () => ({
  auth: jest.fn().mockResolvedValue(null),
  getServerSession: jest.fn().mockResolvedValue(null),
}));

jest.mock('next-auth/providers/credentials', () => {
  const mockCredentials = jest.fn(() => ({
    id: 'credentials',
    name: 'Credentials',
    type: 'credentials',
    credentials: {},
    authorize: jest.fn(),
  }));

  return {
    default: mockCredentials,
    Credentials: mockCredentials,
  };
});

// Mock the entire auth configuration to prevent execution
jest.mock('@/config/auth', () => ({
  handlers: {},
  signIn: jest.fn(),
  signOut: jest.fn(),
  auth: jest.fn(),
}));

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
