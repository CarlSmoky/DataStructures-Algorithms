class Solution:
    def totalMoney(self, n: int) -> int:
        day = 1
        week = 0
        sum = 0
        for i in range(1, n + 1):
            sum += day + week
            day += 1
            if i % 7 == 0:
                week += 1
                day = 1
        return sum