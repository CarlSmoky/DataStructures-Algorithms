class Solution:
    def frequencySort(self, s: str) -> str:
        count = Counter(s)
        sorted_count = sorted(count.items(), key=lambda kv: kv[1], reverse=True)
        result = ""
        for pair in sorted_count:
            result += pair[0] * pair[1]
        
        return result