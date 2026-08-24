class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if(s.length <= 1) return s.length;

        const countMap = new Map();

        let left = 0;
        let right = 0;
        let maxFreq = 0;
        let maxLength = 0;

        for(right = 0; right < s.length; right++){
            let currentChar = s[right];

            countMap.set(currentChar, (countMap.get(currentChar) || 0) + 1);

            maxFreq = Math.max(maxFreq, countMap.get(currentChar));

            if((right - left + 1) - maxFreq > k){
                let leftChar = s[left];
                countMap.set(leftChar, countMap.get(leftChar) - 1);
                left++;
            }
            
            maxLength = Math.max(maxLength,(right - left + 1));
        }
        return maxLength;
    }
}
