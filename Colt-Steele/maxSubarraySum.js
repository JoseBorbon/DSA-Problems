/* Given an array of integers and a number, write a function called maxSubArraySum, which finds the maximum sum of a subarray with the length of the 
number passed to the function

Note that a subarray must consist of elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, 
but [100, 300] is not.

Constraints:
 Time Complexity : O(N)
 Space Complexity: O(1)
*/

function maxSubarraySum(nums, k) {
  if (k > nums.length) return null;
  //declare a max sum variable and assign it negative infinity to take into //consideration an array of negative integers
  let maxSum = -Infinity;
  let tempSum = 0;
  //create window
  for (let i = 0; i < k; i++) {
    tempSum += nums[i];
  }
  //get maxSum between temp and max to start off
  maxSum = Math.max(tempSum, maxSum);
  //re-assign tempSum to maxSum to start off
  tempSum = maxSum;

  //iterate through remaining array of integers
  for (let i = k; i < nums.length; i++) {
    //re-assign tempSum to be tempSum minus starting integer plus current integer, which is used to update our sliding windows current subarray sum
    tempSum = tempSum - nums[i - k] + nums[i];
    //get the max between tempSum and maxSum
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

maxSubarraySum([100, 200, 300, 400], 2); //=> 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); //=> 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); //=> 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); //=> 5
maxSubarraySum([2, 3], 3); //=> null
