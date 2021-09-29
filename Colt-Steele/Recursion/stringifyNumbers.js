/* Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. 
DO NOT MODIFY THE EXISTING OBJECT. Recursion would be a great way to solve this! */

function stringifyNumbers(object) {
  const copyObj = Object.assign({}, object);

  function recurseObj(obj) {
    //base case occurs when we have nothing else to iterate through

    //recursive case
    for (const prop in obj) {
      //if current props value is a number then stringify it
      if (typeof obj[prop] === "number") {
        obj[prop] = String(obj[prop]);
        //otherwise if it's an object invoke recurseObj passing in current obj props value as an argument
      } else if (typeof obj[prop] === "object") {
        recurseObj(obj[prop]);
      }
    }
  }
  recurseObj(copyObj);

  return copyObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

stringifyNumbers(obj);

/* Expected Output
  {
      num: "1",
      test: [],
      data: {
          val: "4",
          info: {
              isRight: true,
              random: "66"
          }
      }
  }
  */
