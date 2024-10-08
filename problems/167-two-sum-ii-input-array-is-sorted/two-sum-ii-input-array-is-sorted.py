class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l = 0
        r = len(numbers) - 1
        while l < r:
            sum = numbers[l] + numbers[r]
            if target == sum:
                return [l + 1, r + 1]
            if sum > target:
                r -= 1
            else:
                l += 1

