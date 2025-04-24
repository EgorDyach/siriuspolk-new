import ENV from '@shared/config/env';

export const getServerLink = (link: string = '') =>
  link ? `${ENV.serverBaseUrl}${link}` : '/UnknownSoldier.jpg';
