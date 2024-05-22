class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        result = [0,0]
        countNums = {}

        for n in nums:
            if n in countNums:
                countNums[n] = countNums[n] + 1
                result[0] = n
            else:
                countNums[n] = 1
        
        for i in range(len(nums)):
            num = i + 1
            if num not in countNums:
                result[1] = num
        
        return result
