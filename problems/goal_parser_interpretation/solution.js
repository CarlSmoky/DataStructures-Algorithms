/**
 * @param {string} command
 * @return {string}
 */
const interpret = command => {
  const mapObj = {
    "()": "o",
    "(al)": "al"
  }

  return command.replace(/\(\)|\(al\)/gi, matched => {
    return mapObj[matched];
  });  
};