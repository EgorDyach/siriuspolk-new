import { Check, CircleAlert, TriangleAlert, X } from 'lucide-react';
import { ExternalToast, toast } from 'sonner';

export const showErrorNotification = (
  text: string,
  options: ExternalToast = {},
) => toast(text, { icon: <X data-testid="error-icon" />, ...options });

export const showSuccessNotification = (
  text: string,
  options: ExternalToast = {},
) => toast(text, { icon: <Check data-testid="success-icon" />, ...options });

export const showWarningNotification = (
  text: string,
  options: ExternalToast = {},
) =>
  toast(text, {
    icon: <TriangleAlert data-testid="warning-icon" />,
    ...options,
  });

export const showInfoNotification = (
  text: string,
  options: ExternalToast = {},
) => toast(text, { icon: <CircleAlert data-testid="info-icon" />, ...options });
