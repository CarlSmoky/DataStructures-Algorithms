class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        hashmap = {}
        for arr in words:
            for cha in arr:
                if cha in hashmap:
                    hashmap[cha] = hashmap[cha] + 1
                else:
                    hashmap[cha] =  1
    
        for key, value in hashmap.items():
            if (value % len(words) != 0):
                return False
        return True