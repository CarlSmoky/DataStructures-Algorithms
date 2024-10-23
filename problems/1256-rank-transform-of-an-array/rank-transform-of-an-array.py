class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        sortedArr = sorted(arr.copy())
        rankHash = {}
        rank = 1

        for num in sortedArr:
            if num not in rankHash:
                rankHash[num] = rank
                rank += 1
        
        return [rankHash[num] for num in arr]