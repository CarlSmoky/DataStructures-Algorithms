class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        merged_tuples = [(names[i], heights[i]) for i in range(0, len(names))]
        merged_tuples.sort(key=lambda x: x[1], reverse=True)
        return [name for name, height in merged_tuples]