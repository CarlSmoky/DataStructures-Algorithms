class Solution:
    def isValid(self, s: str) -> bool:
        parentheses = {
            "}" : "{",
            ")" : "(",
            "]" : "["
        }

        stack = []
        for p in s:
            if p in parentheses.values():
                stack.append(p)
            else:
                # if the stack is not empty. 
                # In Python, an empty list is considered False, while a non-empty list is considered True.
                if stack and stack[-1] == parentheses[p]:
                    stack.pop()
                else:
                    return False
        
        return len(stack) == 0