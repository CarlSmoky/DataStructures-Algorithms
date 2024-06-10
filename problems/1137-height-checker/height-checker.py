import copy
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        new_list = list(heights)
        heights.sort()
        result = 0
        for i in range(len(heights)):
            if new_list[i] != heights[i]:
                result += 1
        
        return result