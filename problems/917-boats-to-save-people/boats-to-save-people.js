/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (people, limit) => {
    people.sort((a, b) => a - b);
    let results = 0;
    let l = 0;
    let r = people.length - 1;
    while(l <= r) {
        if (people[l] + people[r] <= limit) {
            l++;
            r--;
        } else {
            r--;
        }
        results++;
    }

    return results;
    
};