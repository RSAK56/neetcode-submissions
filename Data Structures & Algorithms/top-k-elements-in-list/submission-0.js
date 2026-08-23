class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums.length <= 0){
            return []
        }

    // Build freq map
        const freqMap = new Map();
        for(const num of nums) {
            freqMap.set(num, (freqMap.get(num)|| 0) + 1);
        }

        return Array.from(freqMap.entries()).sort((a,b) => b[1] - a[1]).slice(0, k).map(([num]) => num);
    }
}
