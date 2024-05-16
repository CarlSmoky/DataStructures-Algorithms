class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        count = 0
        gIndex = 0
        sIndex = 0
        s.sort()
        g.sort()
        while gIndex < len(g) and sIndex < len(s):
            if s[sIndex] >= g[gIndex]:
                count += 1
                gIndex += 1
                sIndex += 1
            else:
                sIndex += 1
        
        return count