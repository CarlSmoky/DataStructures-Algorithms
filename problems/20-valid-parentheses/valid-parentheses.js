/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const parentheses = {
        ')': '(',
        '}': '{',
        ']': '[' 
    };

    let stack = [];
    for (let char of s) {
        if (Object.values(parentheses).indexOf(char) !== -1) {
            stack.push(char);
        } else {
            if (stack[stack.length - 1] === parentheses[char]) {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};