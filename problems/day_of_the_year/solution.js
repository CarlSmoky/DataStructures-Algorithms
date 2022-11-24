/**
 * @param {string} date
 * @return {number}
 */
const dayOfYear = date => {
  const d = new Date (date);
  const firstDayOfTheyear = new Date(d.getFullYear(), 0, 1);
  return Math.ceil((d - firstDayOfTheyear) /1000 / 60 / 60 / 24) + 1;
};