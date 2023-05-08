/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
   //get max number of candy
   const max = Math.max(...candies);
   //return array contains boolean for each el if el has more than mac num of candy 
   return candies.map(el => {
      const tmp = el + extraCandies;
      return tmp >= max;
   })
};