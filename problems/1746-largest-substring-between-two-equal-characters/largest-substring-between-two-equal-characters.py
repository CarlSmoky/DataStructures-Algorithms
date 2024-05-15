class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        maxDiff = -1
        if len(s) == 1:
            return maxDiff

        hashMap = {}
        for i in range(len(s)):
            if s[i] in hashMap.keys():
                maxDiff = max(maxDiff, i - hashMap[s[i]] - 1)
            else:
                hashMap[s[i]] = i
        return maxDiff