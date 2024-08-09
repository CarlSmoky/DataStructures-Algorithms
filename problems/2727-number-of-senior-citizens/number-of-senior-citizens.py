class Solution:
    def countSeniors(self, details: List[str]) -> int:
        total = 0
        for info in details:
            if int(info[11] + info[12]) > 60:
                total += 1
        return total