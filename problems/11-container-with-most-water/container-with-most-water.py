class Solution:
    def maxArea(self, height: List[int]) -> int:
        result = 0
        l = 0
        r = len(height) - 1
        while l < r:
            tmp = (r - l) * min(height[l], height[r])
            result = max(tmp, result)
            if height[l] > height[r]:
                r -= 1
            else:
                l += 1
        return result