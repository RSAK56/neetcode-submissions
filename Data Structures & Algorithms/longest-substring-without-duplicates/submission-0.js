class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length <= 1) return s.length;

        const map = new Map();
        
        let left = 0;
        let maxLength = 0;

        for(let right = 0; right < s.length; right++){
            const currentChar = s[right];

            if(map.has(currentChar) && map.get(currentChar) >= left){
                left = map.get(currentChar) + 1;
            }

            map.set(currentChar, right);

            const currWindowSize = right - left + 1;
            maxLength = Math.max(maxLength, currWindowSize);
        }
        return maxLength;
    }
}
