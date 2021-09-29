/* Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.*/

function flatten(arrOfArrs) {
  let newArr = [];

  for (let i = 0; i < arrOfArrs.length; i++) {
    if (Array.isArray(arrOfArrs[i])) {
      newArr = newArr.concat(flatten(arrOfArrs[i]));
    } else {
      newArr.push(arrOfArrs[i]);
    }
  }
  return newArr;
}

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]
