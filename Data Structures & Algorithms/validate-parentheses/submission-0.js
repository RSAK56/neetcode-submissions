class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const paranthesisMap = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        const stack = [];

        for (const char of s) {
            if (char in paranthesisMap) {
                if (stack.length > 0 && stack[stack.length - 1] === paranthesisMap[char]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
