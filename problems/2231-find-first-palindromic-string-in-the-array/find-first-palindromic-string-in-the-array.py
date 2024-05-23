class Solution:
    def isPalindome(self, w:str) -> bool:
        l = 0
        r = len(w) - 1
        while l < r:
            if w[l] != w[r]:
                return False
            l += 1
            r -= 1
        return True
        

    def firstPalindrome(self, words: List[str]) -> str:
        for w in words:
            if self.isPalindome(w):
                return w
        return ""

