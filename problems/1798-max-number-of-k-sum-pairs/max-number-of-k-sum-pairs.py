class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums.sort()
        l = 0
        r = len(nums) - 1
        result = 0
        print(nums)
        while l < r:
            sum = nums[l] + nums[r]
            print(sum, nums[l], nums[r])
            if sum == k:
                result += 1
                l += 1
                r -= 1
            elif sum > k:
                r -= 1
            else:
                l += 1
        
        return result