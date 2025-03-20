export const filelistToFileArray = (files: FileList | null): File[] => {
  const arr: File[] = [];
  if (!files) return arr;
  for (let i = 0; i < files.length; i++) {
    const f = files.item(i);
    if (f) arr.push(f);
  }
  return arr;
};
