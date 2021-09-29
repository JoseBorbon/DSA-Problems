/*Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.*/

function capitalizeFirst(strings) {
  //base case
  if (strings.length === 0) return [];

  //recursive case
  const capitalizedStrings = capitalizeFirst(strings.slice(0, -1)).concat(strings[strings.length - 1][0].toUpperCase() + strings[strings.length - 1].slice(1));
  return capitalizedStrings;
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
