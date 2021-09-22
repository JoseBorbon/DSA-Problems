function validAnagram(str1, str2){
    //create two objects
  const freqCounter1 = {};
  const freqCounter2 = {};

  //iterate through one string and place it inside first object 
  for(const char of str1) {
  //iterate through second string and place it inside second object
  freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }

  for(const char of str2) {
  //iterate through one object and ensure that the current key is inside of other object
  freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }

  // console.log(freqCounter1);
  // console.log(freqCounter2);

  for(const key in freqCounter1) {
    //if the current key is inside second object
    if(key in freqCounter2) {
      //if both keys do not have the same frequency value
      if(freqCounter1[key] !== freqCounter2[key]) {
        return false;
      }
    }
    else {
      return false;
    }
  }
  //return true after all is done
  return true;
}