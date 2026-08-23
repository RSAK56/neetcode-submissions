class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        
        let currentNum = 0;

        let longestList = 0;

        let longestSoFar = 0;

        for(let i = 0; i < nums.length; i++){
            const start = nums[i] - 1;

            if(set.has(start)){
                continue;
            }

            currentNum = start;
            longestList = 0;
        
            let nextNum = currentNum + 1;

            while (set.has(nextNum)){
                    longestList +=  1;
                    nextNum += 1;
            }
            if(longestList > longestSoFar){
                longestSoFar = longestList;
            }
        }

        return longestSoFar;
    }
}
