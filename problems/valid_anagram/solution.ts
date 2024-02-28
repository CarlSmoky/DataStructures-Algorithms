const isAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) return false;
    const sHash = countStr(s);
    const tHash = countStr(t);
    for (let [key, value] of Object.entries(sHash)) {
        if (value !== tHash[key]) return false;
    } 
    return true;
};

const countStr = (str: string): {} => {
    const result = {};
        for (let l of str) {
            result[l] = result[l] ? result[l] + 1 : 1;
        }
        console.log(result)
    return result;
}

