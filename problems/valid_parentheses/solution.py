class Solution:
    def isValid(self, s: str) -> bool:
        list = []
        for char in s:
            if char == '(' or char == '{' or char == '[':
                list.append(char)
            else:
                if not list:
                    return False
                if char == ')' and list[-1] == '(':
                    list.pop()
                elif char == '}' and list[-1] == '{':
                    list.pop()
                elif char == ']' and list[-1] == '[':
                    list.pop()
                else:
                    return False
        return not list