class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = ['a', 'e', 'i', 'o','u']
        count = 0
        for cha in s[:k]:
            if cha in vowels:
                count += 1
        maxCount = count
        for i in range(len(s) - k):
            if s[i] in vowels:
                count -= 1
            if s[i + k] in vowels:
                count += 1
            maxCount = max(maxCount, count)
        return maxCount