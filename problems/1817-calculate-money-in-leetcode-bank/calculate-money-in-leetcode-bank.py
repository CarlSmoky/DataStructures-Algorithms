class Solution:
    def totalMoney(self, n: int) -> int:
        pre = 0
        cur = 0
        sum = 0
        for i in range(n):
            if i % 7 == 0:
                pre += 1
                cur = pre
            sum += cur
            cur += 1
        return sum