function areThereDuplicates(...args) {
  //have left and right pointer
  //left will be responsible for keeping track of current "unqiue value" and resetting right pointer after each "cycle"
  let left = 0;

  //iterate through args
  for (let right = 1; left < args.length - 1; right++) {
    //if right is out of bounds
    if (right === args.length) {
      left++;
      right = left + 1;
      // console.log(left, right);
    }

    //if left pointers element is equal to right pointers element
    if (args[left] === args[right]) {
      return true;
    }
  }
  return false;
}
