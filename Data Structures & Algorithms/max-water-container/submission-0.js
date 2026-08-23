class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const currentWidth = right - left;
            const currentHeight = Math.min(heights[right], heights[left]);
            const currentArea = currentWidth * currentHeight;
            if (currentArea > maxArea) {
                maxArea = currentArea;
            }
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }
}
