class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        r = len(height) - 1
        result = 0
        while l < r:
            aria = min(height[l], height[r]) * (r - l)
            result = max(result, aria)
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return result
