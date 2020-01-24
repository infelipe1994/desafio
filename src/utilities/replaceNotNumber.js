export const replaceNotNumber = (searchValue, replaceValue = '') =>
  searchValue.replace(/[^\d]/g, replaceValue)
