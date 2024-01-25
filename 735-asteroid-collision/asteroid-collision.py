class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        # + means right, - means left
        # value = size of asteroid
        # a > b ? b gets destroyed
        # a == b ? a and b gets destroyed, 
        # 2 asteroids meeting in the same direction will never meet
        stack = []

        for val in asteroids:
            if not stack or val > 0:
                stack.append(val)
            else:
                while True:
                    peek = stack[-1]
                    if peek < 0:
                        stack.append(val)
                        break
                    elif peek == -val:
                        stack.pop()
                        break
                    elif peek > -val:
                        break
                    else:
                        stack.pop()
                        if not stack:
                            stack.append(val)
                            break
        return stack
                    


        return stack