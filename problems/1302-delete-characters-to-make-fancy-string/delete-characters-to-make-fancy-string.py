class Solution:
    def makeFancyString(self, s: str) -> str:
        res = list(s)
        for i in range(len(res) - 2):
            if res[i] == res[i + 1] and res[i + 1] == res[i + 2]:
                res[i] = ""
            
        return "".join(res)