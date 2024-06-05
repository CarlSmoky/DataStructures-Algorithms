class Solution:
    def longestPalindrome(self, s: str) -> int:
        count = {}
        for l in s:
            if l in count:
                count[l] += 1
            else:
                 count[l] = 1

        result = 0
        flag = False
        for value in count.values():
            if value % 2 == 0:
                result += value
            else:
                result += value - 1
                flag = True
        
        if flag == True:
            result += 1
        
        return result