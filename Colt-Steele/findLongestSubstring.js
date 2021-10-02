// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
  if (str.length === 0) return 0;

  let start = 0;
  let maxLength = 0;
  const set = new Set();

  for (let end = 0; end < str.length; end++) {
    //if current value is in the set
    if (set.has(str[end])) {
      maxLength = Math.max(maxLength, set.size);
      //while set has current element inside of it
      while (set.has(str[end])) {
        //remove current start pointer position using string at index from set
        set.delete(str[start]);
        start++;
      }
      //post while loop - add current end to the set
      set.add(str[end]);
    } else {
      set.add(str[end]);
    }
  }
  return Math.max(maxLength, set.size);
}

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
