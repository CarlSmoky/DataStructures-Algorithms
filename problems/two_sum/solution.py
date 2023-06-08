# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         a= []
#         for i in range(len(nums)):
#             for j in range(i + 1,len(nums)):
#                 if (nums[i] + nums[j] == target):
#                     a.append(i)
#                     a.append(j)
#                     break
#                 else:
#                     continue        
#         return a

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_dict = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_dict:
                return [num_dict[complement], i]
            num_dict[num] = i
        return []