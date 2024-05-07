class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        # sortedNums = sorted(nums, reverse=True)
        # return (sortedNums[0] - 1) * (sortedNums[1] - 1)

        max1 = float('-inf')
        max2 = float('-inf')

        for n in nums:
            if n > max1:
                max2 = max1
                max1 = n
            elif n > max2:
                max2 = n
        return (max1 - 1) * (max2 -1 )
                