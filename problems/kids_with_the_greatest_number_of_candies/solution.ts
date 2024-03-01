const kidsWithCandies = (candies: number[], extraCandies: number): boolean[] => {
    const max = Math.max(...candies);
    return candies.map(num => {
        const tmpNum = num + extraCandies;
        if (max <= tmpNum) return true
        return false
    })
};