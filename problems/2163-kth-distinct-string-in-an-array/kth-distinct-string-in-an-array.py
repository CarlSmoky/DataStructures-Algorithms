class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        count = Counter(arr)
        distinct = []
        for cha in arr:
            if count[cha] == 1:
                distinct.append(cha)
        result = ""
        if len(distinct) >= k:
            result = distinct[k - 1]
        
        return result