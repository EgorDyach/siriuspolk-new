'use server';

import { headers } from 'next/headers';

export const getPathname = async (): Promise<string> => {
  const headersList = await headers();
  const domain = headersList.get('host') || '/';
  const fullUrl = headersList.get('referer') || '/';
  let [, pathname] =
    fullUrl.match(new RegExp(`https?:\/\/${domain}(.*)`)) || [];

  if (!pathname) pathname = '/';
  return pathname;
};
