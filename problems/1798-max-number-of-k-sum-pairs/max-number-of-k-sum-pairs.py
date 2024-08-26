class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        # hashMap = {}
        # result = 0
        # for n in nums:
        #     diff = k - n
        #     if diff in hashMap and hashMap[diff] > 0:
        #         result += 1
        #         hashMap[diff] = hashMap[diff] - 1
        #     else:
        #         if n in hashMap:
        #             hashMap[n] += 1
        #         else:
        #             hashMap[n] = 1
        # return result
        hashMap = {}
        result = 0
        for n in nums:
            diff = k - n
            if diff in hashMap and hashMap[diff] > 0:
                result += 1
                hashMap[diff] = hashMap[diff] - 1
            else:
                hashMap[n] = hashMap.get(n, 0) + 1
        return result