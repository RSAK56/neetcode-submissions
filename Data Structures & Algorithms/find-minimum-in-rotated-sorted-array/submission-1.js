class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let result = nums[0];

        while(l <= r){
            if(nums[l] <= nums[r]){
                result = Math.min(result, nums[l]);
                break;
            }

            let m = Math.floor((l + r)/2);
            result = Math.min(result, nums[m]);

            if(nums[l] <= nums[m]){
                l = m + 1;
            }
            else{
                r = m - 1;
            }
        }

        return result;
    }
}
