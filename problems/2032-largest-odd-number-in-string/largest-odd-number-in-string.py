class Solution:
    def largestOddNumber(self, num: str) -> str:
        for i in range(len(num) - 1, -1, -1):
            if int(num[i]) % 2 != 0:
                tmp = num[0 : i + 1]    
                return "".join(tmp)
            
        return ""