/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = (s) => {
    const count = {};
    for (let cha of s) {
        count[cha] = (count[cha] || 0) + 1
    }

    let MaxCount = 0;
    for (let value of Object.values(count)) {
        MaxCount = Math.max(MaxCount, value);
    }

    let result = []
    for (let i = MaxCount; i > 0; i--) {
       for (let [key, value] of Object.entries(count)) {
            if (i === value) {
                const tmp = Array(value).fill(key);
                result = [...result, ...tmp]
            }
       }
    }
    return result.join("")
    
};