// Question 2
// Find the maximum consecutive 1's in an array of 0's and 1's.
// Example:
// a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
// b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]


function consecutiveOnes(nums) {
    let currentCount = 0;
    let largestCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 1) {
            currentCount = 0;
        }
        else {
            currentCount++;
        }
        if (currentCount > largestCount) {
            largestCount = currentCount
        }
    }
    document.write("Max num of consecutive 1's is " + largestCount + '<br>');
}
consecutiveOnes([0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0])
consecutiveOnes([1, 0, 0, 0, 0, 1, 0, 0, 0, 1]);