class Solution:
    def isPathCrossing(self, path: str) -> bool:
        history = set(["0,0"])
        
        x = 0
        y = 0
        for direction in path:
            if direction == "N":
                y += 1
            if direction == "S":
                y -= 1
            if direction == "E":
                x += 1
            if direction == "W":
                x -= 1

            newPos = str(x) + "," + str(y)
            if (newPos in history):
                return True
            history.add(newPos)
        
        return False