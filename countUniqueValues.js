function countUniqueValues(array) {
  //if the length of the array is 0 return 0
  if(array.length === 0) return 0;

  //declare a count variable and set to 1 by default
  let count = 1;
  let l = 0;
  //left pointer will be the new unique value found
  //right pointer will keep track of current value to determine if new unqiue value is found
  for(let r = 1; r < array.length; r++) {
    //if current elements pointers are pointing to are not equal
    if(array[l] !== array[r]) {
      count++;
      l = r;
    }
  }
  return count;
}