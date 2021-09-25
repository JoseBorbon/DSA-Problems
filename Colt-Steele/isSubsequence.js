/*
 Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the 
 characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the 
 second string, without their order changing.
*/
function isSubsequence(string1, string2) {
  //have left and right pointer
  let left = 0;
  //iterate through first string and so long as left is in bounds, keep iterating
  for (let right = 0; left < string1.length; right++) {
    //if right pointer is out of bounds
    if (!string2[right]) {
      return false;
    }
    //if left pointer at string1 is equal to right pointer at string2
    if (string1[left] === string2[right]) {
      left++;
    }
  }
  return true;
}

isSubsequence("hello", "hello world"); //true
isSubsequence("sing", "sting"); //true
isSubsequence("abc", "abracadabra"); //true
isSubsequence("abc", "acb"); //false (order matters)
