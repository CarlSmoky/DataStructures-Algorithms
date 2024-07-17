class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        i = 0
        currentTime = 0
        up = True
        while currentTime <= time:
            if up == True:
                i += 1
            else:
                i -= 1

            if up == True and i == n:
                up = False
            if up == False and i == 1:
                up = True
                
            currentTime += 1
            
        return i