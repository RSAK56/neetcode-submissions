class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const prevProduct = new Array(n).fill(1);
        const suffProduct = new Array(n).fill(1);
        const res = new Array(n);

        for(let i = 1; i < n; i++){
            prevProduct[i] = nums[i-1] * prevProduct[i-1]
        }

        for(let j = n-2; j >= 0 ; j--){
            suffProduct[j] = nums[j+1] * suffProduct[j+1]
        }

        for(let i = 0; i < n; i++){
            res[i] = prevProduct[i] * suffProduct[i];
        }

        return res;
    }
}
