/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
const canBeTypedWords = (text, brokenLetters) => {
  const textArr = text.split(" ");
  let count = textArr.length;
  textArr.forEach(word => {
    for (let i = 0; i < [...brokenLetters].length; i++)
    if ((word.length === 1 && word.indexOf([...brokenLetters][i]) === 0) || word.indexOf([...brokenLetters][i]) >= 0) {
        count --;
        break;
      }
    })
  return count;
};