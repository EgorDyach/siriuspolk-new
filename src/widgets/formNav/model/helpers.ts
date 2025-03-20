import { formLinks } from '../api/formLinks';

export const getScale = (pathname: string | null) =>
  formLinks.findIndex((value) => pathname?.includes(value.link) || '') * 2 + 1;

export const getIsActive = (pathname: string | null, index: number) =>
  formLinks.findIndex((value) => pathname?.includes(value.link) || '') >= index;
