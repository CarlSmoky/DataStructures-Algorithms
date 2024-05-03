class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        uniqueNums = set(nums)
        maxNum = -1
        for n in nums:
            if (n > 0 and -n in uniqueNums):
                if maxNum < n:
                    maxNum = n
        return maxNum