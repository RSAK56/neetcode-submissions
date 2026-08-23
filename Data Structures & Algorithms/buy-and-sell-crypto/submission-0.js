class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length <= 1) return 0;

        let minPrice = Infinity;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            }

            let currentProfit = prices[i] - minPrice;

            if(currentProfit > maxProfit){
                maxProfit = currentProfit;
            }
        }

        return maxProfit;
    }
}
