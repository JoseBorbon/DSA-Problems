//Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let resultSum = 0;

  function recurseObj(object) {
    //base case - nothing else to iterate through for current object

    //recursive case - if we find another object while iterating invoke recurseObj passing in current propertys value as an argument
    for (const prop in object) {
      if (typeof object[prop] === "object") {
        recurseObj(object[prop]);
      } else if (!isNaN(object[prop]) && typeof object[prop] !== "boolean" && object[prop] % 2 === 0) {
        resultSum += object[prop];
      }
    }
  }
  recurseObj(obj);

  return resultSum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10