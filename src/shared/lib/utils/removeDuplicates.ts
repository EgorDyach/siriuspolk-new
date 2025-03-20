export const removeDuplicates = <T>(array: T[]) => {
  function onlyUnique(value: T, index: number, array: T[]) {
    return array.indexOf(value) === index;
  }
  return array.filter(onlyUnique);
};
