class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
      for i in range(len(arr) - 2):
        if self.isOdd(arr[i]) and self.isOdd(arr[i + 1])  and self.isOdd(arr[i + 2]):
            return True
      return False
        

    def isOdd(self, num:[int]) -> bool:
        return num % 2 != 0