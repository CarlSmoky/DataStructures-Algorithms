/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    const currentMax = Math.max(...candies);
    return candies.map(el => el + extraCandies >= currentMax)
};