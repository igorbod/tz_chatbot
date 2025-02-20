/**
 * @description Random value between two values inclusive.
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export const getRandomIntInclusive = (min: number, max: number): number => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export const classNames = (classes: string[]) => {
  if (Array.isArray(classes) && classes.length > 0) {
    return classes.filter(Boolean).join(' ')
  } else {
    return '';
  }
}