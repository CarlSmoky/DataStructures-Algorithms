/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = (s) => {
    const first = [...s].splice(0, s.length/2)
    const second = [...s].splice(s.length/2)
    let coundFirst = 0;
    let coundSecond = 0;
    const vowls = ["a", "e", "i", "u", "o"];
    for (const el of first) {
        if (vowls.indexOf(el.toLowerCase()) !== -1) {
            coundFirst  += 1;
        }
    }
    for (const el of second) {
        if (vowls.indexOf(el.toLowerCase()) !== -1) {
            coundSecond += 1;
        }
    }

    return coundFirst === coundSecond;
};