/**
 * @param {string[]} words
 * @return {number}
 */
const codes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

const getIndex = letter => {
  return letter.charCodeAt(0) - 97;
}
const uniqueMorseRepresentations = (words) => {  
  let pattern = [];
  words.forEach(word => {
    let morseCodedWord = "";
    [...word].forEach(letter => {
      const index = getIndex(letter);
      morseCodedWord += codes[index];
    })
    if (!pattern.includes(morseCodedWord)) {
      pattern.push(morseCodedWord);
    }
  });
  return pattern.length;
};