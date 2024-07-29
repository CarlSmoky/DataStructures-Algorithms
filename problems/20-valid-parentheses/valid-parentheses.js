/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const parentheses = {
        "}" : "{",
        ")" : "(",
        "]" : "["
    }

    let stack = []
    for (let c of s) {
        if (c === "(" || c === "[" || c === "{") {
            stack.push(c);
        } else {
            if(stack[stack.length - 1] === parentheses[c]){
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0 ? true : false;
};