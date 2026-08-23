class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length <= 1) {
            return false;
        }

        const countMap = new Map();

        for(let i = 0; i < nums.length; i++){
            const currentNum = nums[i];
            if(countMap.has(currentNum)){
                return true
            }

            countMap.set(currentNum, true);
        }
        return false;
    }
}
