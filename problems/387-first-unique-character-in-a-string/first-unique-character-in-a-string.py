class Solution:
    def firstUniqChar(self, s: str) -> int:
        countString = Counter(s)
        for i in range(len(s)):
            if countString[s[i]] == 1:
                return i

        return -1 