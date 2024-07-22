class Solution:
    def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:
        minMax = set()
        for i in range(len(matrix)):
            minNum = inf
            for j in range(len(matrix[0])):
                minNum = min(minNum, matrix[i][j])
            minMax.add(minNum)
        
        for j in range(len(matrix[0])):
            maxNum = -inf
            for i in range(len(matrix)):
                maxNum = max(maxNum, matrix[i][j])
            if maxNum in minMax:
                return [maxNum]
        
        return []