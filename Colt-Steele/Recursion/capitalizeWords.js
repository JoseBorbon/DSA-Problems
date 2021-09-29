function capitalizeWords(words) {
  //base case
  if (words.length === 0) return [];
  //recursive case
  //invoke same function passing in sliced array as new argument concatenated with current word
  const resultArr = [words[0].toUpperCase()].concat(capitalizeWords(words.slice(1)));
  return resultArr;
}

let words = ["i", "am", "learning", "recursion"];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
