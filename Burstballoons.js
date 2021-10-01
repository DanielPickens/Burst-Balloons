var maxCoins = function(nums) {

    nums.push(1);
    nums.unshift(1);
    
    const memo = [...Array(nums.length)].map(() => Array(nums.length).fill(0));
    
    function split(start, end) {
        if(start > end) return 0
        if(memo[start][end]) return memo[start][end];
        
        let max = 0;
        
        for(let i = start; i <= end; i++) {
            const left = split(start, i-1);
            const right = split(i+1, end);
            const currBurst = nums[start-1] * nums[i] * nums[end+1]
            const coin = left + currBurst + right;
            max = Math.max(max, coin);
        }
        memo[start][end] = max;
        return max;
    }
    return split(1, nums.length-2)
};
