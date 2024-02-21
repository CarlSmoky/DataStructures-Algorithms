const containsDuplicate = (nums: number[]): boolean =>{
    const hash = {};
    for (let n of nums) {
        if (hash[n]) return true;
        hash[n] = 1;
    }
    return false;
};