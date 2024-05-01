class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        hash = {}
        for el in arr:
            if el in hash:
                hash[el] += 1
            else:
                hash[el] = 1
        for key, value in hash.items():
            if value > len(arr) * 0.25:
                return key
        

            