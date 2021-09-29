//Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(object) {
  const collectedStrings = [];

  function collectRecurse(obj) {
    //base case occurs when we have nothing else to iterate over

    //recursive case
    for (const prop in obj) {
      //if current props value is an object, invoke collectRecurse
      if (typeof obj[prop] === "object") {
        collectRecurse(obj[prop]);
        //otherwise if current props value is a string, push to collectedStrings
      } else if (typeof obj[prop] === "string") {
        collectedStrings.push(obj[prop]);
      }
    }
  }
  collectRecurse(object);

  return collectedStrings;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])
