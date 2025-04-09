import {
  mockedShowErrorNotification,
  mockedShowInfoNotification,
  mockedShowSuccessNotification,
  mockedShowWarningNotification,
} from '../__mocks__/notification';
import { render, screen } from '@testing-library/react';
import { Toaster } from '@shared/ui/Sonner-tmp';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe.each([
  ['success', mockedShowSuccessNotification, 'success-icon'],
  ['error', mockedShowErrorNotification, 'error-icon'],
  ['info', mockedShowInfoNotification, 'info-icon'],
  ['warning', mockedShowWarningNotification, 'warning-icon'],
])('notification', (type, mockFn, iconTestId) =>
  it(`should show ${type} notification`, async () => {
    render(<Toaster />);
    mockFn('test message');

    expect(mockFn).toHaveBeenCalled();
    expect(await screen.findByTestId(iconTestId)).toBeInTheDocument();
    expect(await screen.findByText(/test message/i)).toBeInTheDocument();
  }),
);
