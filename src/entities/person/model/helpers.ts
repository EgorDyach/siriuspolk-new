export const filelistToFileArray = (files: FileList | null): File[] => {
  const arr: File[] = [];
  if (!files) return arr;
  for (let i = 0; i < files.length; i++) {
    const f = files.item(i);
    if (f) arr.push(f);
  }
  return arr;
};

export const getDateDeath = (
  isDeathUnknown: boolean,
  isAlive: boolean,
  deathYear: number,
): number => {
  if (isDeathUnknown) return 0;
  if (isAlive) return 1;
  return deathYear;
};
