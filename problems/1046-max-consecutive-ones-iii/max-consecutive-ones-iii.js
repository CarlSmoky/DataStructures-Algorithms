/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => {
    let start = 0;
    let ans = 0;
    let count = 0;

    for(let  i = 0; i < nums.length; i++){
        if(nums[i] === 0) count++;

        if(count > k){
            if(nums[start] === 0) count--;
            start++;
        }
        ans = Math.max(ans,i-start+1);
    }
    return ans;
};