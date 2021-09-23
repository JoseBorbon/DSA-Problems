function sameFrequency(num1, num2) {
  //input: numbers
  //output: boolean

  //convert both numbers to strings
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  //if the length of both strings are not equal, return false
  if (strNum1.length !== strNum2.length) return false;

  //create a frequency counter object to keep track of frequencies of one string
  const lookup = {};
  for (const char of strNum1) {
    lookup[char] ? lookup[char]++ : (lookup[char] = 1);
  }

  //iterate through second string
  for (const char of strNum2) {
    //if the second strings current character is a key in frequency counter
    if (char in lookup) {
      if (lookup[char]) {
        //decrement the keys value
        lookup[char]--;
        //otherwise return false
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
