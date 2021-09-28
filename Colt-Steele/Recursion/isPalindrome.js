/* Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false. */

function isPalindrome(string) {
  if (string.length < 2) return true;
  //recursive case - if string beginning and end are equal to each other
  if (string[0] === string[string.length - 1]) {
    //invoke isPalindrome passing in a sliced beginning and end string as an argument
    return isPalindrome(string.slice(1, -1));
  } else {
    return false;
  }
}

isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false
