export const pluralize = (value, word, plural = word + 's') =>
  value === 1 ? value + ' ' + word : value + ' ' + plural;

export const formatDate = (dateString) => {
  const d = new Date(dateString);
  return d.getFullYear();
};
