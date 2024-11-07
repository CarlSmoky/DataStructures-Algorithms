/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canSortArray = (nums) => {
    let count = [];
    for (let j = 0; j < nums.length; j++) {
        count[j] = setBits(decimalToBinary(nums[j]));
    }

    let n = nums.length;
    let k = 0;
    while (k < n) {
        let swapped = false;
        for (let i = 1; i < n; i++) {
            if (count[i] === count[i - 1] && nums[i] < nums[i - 1]) {
                // Swap nums[i] and nums[i - 1] if they have the same bit count
                [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
                swapped = true;
            }
        }
        // If no swaps happened, break early
        if (!swapped) break;
        k++;
    }
    return check(nums);
}

const decimalToBinary = (val) => {
    return val.toString(2);
}

const setBits = (binaryString) => {
    let count = 0;
    for (let n of binaryString) {
        if (n === '1') {
            count++;
        }
    }
    return count;
}

const check = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return false;
        }
    }
    return true;
};
