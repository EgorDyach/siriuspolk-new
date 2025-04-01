const personDatesDeath = ['Неизвестно', 'н. в.'];

export const getPersonDates = (
  date_birth: number,
  date_death: number,
): string => {
  if (!date_birth || date_birth <= 0) date_birth = 0;
  if (!date_death || date_death <= 0) date_death = 0;
  const birth = date_birth || 'Неизвестно';
  const death = personDatesDeath[date_death] || date_death;
  return `${birth} - ${death}`;
};
