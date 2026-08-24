class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length || t.length === 0) return "";

        const tFreq = new Map();
        for(let char of t){
            tFreq.set(char, (tFreq.get(char) || 0) + 1);
        }

        let windowFreq = new Map();
        let left = 0;

        let have = 0;
        let need = tFreq.size;

        let minRes = [Infinity, -1, -1];

        for(let right = 0; right < s.length; right++){
            const rightChar = s[right];

            if(tFreq.has(rightChar)){
                windowFreq.set(rightChar, (windowFreq.get(rightChar) || 0) + 1);

                if(windowFreq.get(rightChar) === tFreq.get(rightChar)){
                    have++;
                }
            }

            while(have === need){
                const currentWindowSize = right - left + 1;

                if(currentWindowSize < minRes[0]){
                    minRes = [currentWindowSize, left, right];
                }

                const leftChar = s[left];

                if(tFreq.has(leftChar)){
                    windowFreq.set(leftChar, (windowFreq.get(leftChar) || 0) - 1);

                    if(windowFreq.get(leftChar) < tFreq.get(leftChar)){
                        have--;
                    }
                }

                left++;
            }
        }

        const [minLength, start, end] = minRes;
        return minLength === Infinity ? "" : s.substring(start, end + 1);
    }
}
