class Solution:
    def reverseWords(self, s: str) -> str:
        arrS = s.strip().split(" ")
        result = []
        for i in range(len(arrS) - 1, -1, -1):
            if len(arrS[i]) > 0:
                result.append(arrS[i])
        
        return " ".join(result)
        