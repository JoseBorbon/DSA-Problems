/* Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate 
subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]

Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique. */

const subsets = function (nums) {
  const result = [];
  helper(0, [], nums, result);
  return result;
};

function helper(i, path, nums, res) {
  //base case is once i is same length as nums array
  if (i === nums.length) {
    res.push(path.slice());
    return;
  }

  //exclusion
  helper(i + 1, path, nums, res);
  //inclusion
  path.push(nums[i]);
  helper(i + 1, path, nums, res);
  path.pop();
}
