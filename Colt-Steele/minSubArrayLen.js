/* Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function 
should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead. */

function minSubArrayLen(arr, target) {
  let lastStart = 0; // only increment when looking to see if we can cheat and get smaller min sub length
  let lastEnd = 0; // will be incremented regardless and used to create window initially
  let currSum = 0; // will be used to determine if we are able to cheat for smaller min sub length
  let minSubLen = Infinity; //set to infinity to start off
  let currSubLen = 0;

  for (let i = 0; i < arr.length && currSum < target; i++) {
    currSum += arr[i];
    currSubLen++;
    lastEnd++;
  }
  //edge case for when sum of all numbers in array are not greater than target
  if (currSum < target) return 0;
  minSubLen = Math.min(currSubLen, minSubLen);

  for (let i = lastEnd; i < arr.length + 1; i++) {
    //while currSum is greater than target, begin looking to cheat
    while (currSum >= target) {
      currSum -= arr[lastStart];
      lastStart++;
      currSubLen--;

      if (currSum >= target) {
        minSubLen = Math.min(minSubLen, currSubLen);
      }
    }
    currSum += arr[i];
    currSubLen++;
  }
  return minSubLen;
}

minSubArrayLen([2, 1, 6, 5, 4], 9); // 2
minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
