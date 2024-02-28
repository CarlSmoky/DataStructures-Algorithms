class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        sCount = countStr(s)
        tCount = countStr(t)
        for key in sCount:
            if sCount[key] != tCount[key]:
                return False
        return True

def countStr(s: str):
    count = defaultdict(int)
    for l in s:
        count[l] += 1
    return count