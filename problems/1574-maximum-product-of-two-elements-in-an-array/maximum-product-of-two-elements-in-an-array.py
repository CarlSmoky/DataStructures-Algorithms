class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        sortedNums = sorted(nums, reverse=True)
        return (sortedNums[0] - 1) * (sortedNums[1] - 1)