class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        l = 0
        r = len(nums) - 1
        res = 0
        nums.sort()
    
        while l < r:
            sum = nums[l] + nums[r]
            if sum < k:
                l += 1
            elif sum > k:
                r -= 1
            else:
                res += 1
                l += 1
                r -= 1

        return res