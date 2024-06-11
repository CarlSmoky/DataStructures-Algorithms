class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        l = 0
        r = 0
        countZero = 0
        maxSubarray = 0
        while r < len(nums):
            if nums[r] == 0:
                countZero += 1
            
            # When we have more than one zero in the window,
            # we need to move the window's left pointer until we have only one zero.
            if countZero > 1: 
                if nums[l] == 0:
                    countZero -= 1
                l += 1

            if countZero <= 1:
                maxSubarray = max(maxSubarray, r - l)

            r += 1
        
        return maxSubarray
