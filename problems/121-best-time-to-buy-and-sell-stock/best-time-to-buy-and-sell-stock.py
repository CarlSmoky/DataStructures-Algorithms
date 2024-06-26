class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left = 0
        right = 0
        maxProfit = 0

        while right < len(prices):
            if prices[left] < prices[right]:
                profit = prices[right] - prices[left]
                maxProfit = max(profit, maxProfit)
            else:
                left = right
            right += 1
        return maxProfit