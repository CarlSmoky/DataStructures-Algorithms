class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        maxSum = sum(nums[:k])
        tmpSum = maxSum
        for i in range(len(nums) - k):
            tmpSum -= nums[i]
            tmpSum += nums[i + k]
            maxSum = max(tmpSum, maxSum)
        return maxSum / k