class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        l = 0
        for r in range(len(nums)):
            if nums[r] != 0:
                tmp = nums[l]
                nums[l] = nums[r]
                nums[r] = tmp
                l += 1