class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        const lookup = {};

        for(let i = 0; i < s.length; i++){
            const letter = s[i];
            lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
        }

        for (let i = 0; i < t.length; i++){
            const letter = t[i];
            if(!lookup[letter]){
                return false;
            }
            lookup[letter] -= 1;
        }
        return true;
    }
}
