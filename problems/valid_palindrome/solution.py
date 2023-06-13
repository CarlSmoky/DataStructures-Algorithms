class Solution:
    def isPalindrome(self, s: str) -> bool:
        convertedStr = ''.join(filter(str.isalnum, s)).lower()
        reversedStr = convertedStr[::-1]
        for i in range(0, len(convertedStr)):
            if convertedStr[i] != reversedStr[i]:
                return False
        return True
        