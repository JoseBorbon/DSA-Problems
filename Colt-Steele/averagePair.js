/*
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array 
where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Constraints:
Time Complexity: O(N)
Space Complexity: O(1)
*/

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    //if the average of left and right are less than target, increment left
    if (arr[left] + arr[right] < target * 2) {
      arr[left]++;
    } else if (arr[left] + arr[right] > target * 2) {
      right--;
    } else {
      return true;
    }
  }
  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
