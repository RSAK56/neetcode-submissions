class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for(let i = 0; i < strs.length; i++){
            let seperator = JSON.stringify(strs[i].length) + "#";

            result += seperator + strs[i];
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        
        while(i < str.length){
            let j = i;
            while (str[j] !== "#"){
                j += 1;
            }
            
            let length = parseInt(str.slice(i, j));
            
            result.push(str.slice(j + 1, j + 1 + length));
            
            i = j + 1 + length;
        }
        return result;
    }
}
