import {
  showSuccessNotification,
  showErrorNotification,
  showInfoNotification,
  showWarningNotification,
} from '../notification';

export const mockedShowSuccessNotification = jest.fn((text: string) =>
  showSuccessNotification(text),
);
export const mockedShowErrorNotification = jest.fn((text: string) =>
  showErrorNotification(text),
);
export const mockedShowInfoNotification = jest.fn((text: string) =>
  showInfoNotification(text),
);
export const mockedShowWarningNotification = jest.fn((text: string) =>
  showWarningNotification(text),
);
