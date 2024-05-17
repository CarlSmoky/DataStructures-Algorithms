class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        mid = int(len(s)/2)
        first = s[0: mid]
        second = s[mid:]
        
        countFirst = 0
        for el in first:
            if el in vowels:
                countFirst += 1
        
        countSecont = 0
        for el in second:
            if el in vowels:
                countSecont += 1
        
        return countFirst == countSecont
        