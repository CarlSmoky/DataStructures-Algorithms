class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        # Set
        setNums1 = set(nums1)
        for n in nums2:
            if n in setNums1:
                return n
        return -1
        