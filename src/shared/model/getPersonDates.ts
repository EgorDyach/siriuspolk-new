const personDatesDeath = ['Неизвестно', 'н. в.'];

export const getPersonDates = (
  date_birth: number,
  date_death: number,
): string => {
  const birth = date_birth || 'Неизвестно';
  const death = personDatesDeath[date_death] || date_death;
  return `${birth} - ${death}`;
};
