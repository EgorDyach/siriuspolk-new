export const routes = {
  home: '/',
  gallery: '/gallery',
  histories: '/histories',
  form: '/form',
  admin: '/admin',
  historyById: (id: string | number) => `/histories/${id}`,
};
