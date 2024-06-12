class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        countMap = {}
        remain = []
        for n in arr1:
            if n not in arr2: 
                remain.append(n)
            else:
                if n in countMap:
                    countMap[n] += 1
                else:
                    countMap[n] = 1
        
        remain.sort()
        
        result = []
        for n in arr2:
            result.extend([n] * countMap[n])
        
        result.extend(remain)
        return result


        