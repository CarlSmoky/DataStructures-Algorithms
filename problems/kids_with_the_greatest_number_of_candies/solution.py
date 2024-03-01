class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxNum = max(candies)
        result = []
        for n in candies:
            tmp = n + extraCandies
            if maxNum <= tmp:
                result.append(True)
            else:
                result.append(False)
        return result
