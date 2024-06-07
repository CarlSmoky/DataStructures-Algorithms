class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        # Set
        # setNums1 = set(nums1)
        # for n in nums2:
        #     if n in setNums1:
        #         return n
        # return -1

        # Two pointer
        index1 = 0
        index2 = 0
        while index1 < len(nums1) and index2 < len(nums2):
            if nums1[index1] == nums2[index2]:
                return nums1[index1]
            if nums1[index1] < nums2[index2]:
                index1 += 1
            else:
                index2 += 1
        
        return -1


        