import { Check, CircleAlert, TriangleAlert, X } from "lucide-react";
import { toast } from "sonner";

export const showErrorNotification = (text: string) =>
  toast(text, { icon: <X /> });

export const showSuccessNotification = (text: string) =>
  toast(text, { icon: <Check /> });

export const showWarningNotification = (text: string) =>
  toast(text, { icon: <TriangleAlert /> });

export const showInfoNotification = (text: string) =>
  toast(text, { icon: <CircleAlert /> });
