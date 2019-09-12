function checkAB(num) {
  // you can only write your code here!
  var tempA = [];
  var tempB = [];
  for (i = 0; i < num.length; i++) {
    if (num[i] === "a") {
      tempA.push(i);
    } else if (num[i] === "b") {
      tempB.push(i);
    }
  }
  var result = [];
  for (i = 0; i < tempA.length; i++) {
    for (j = 0; j < tempB.length; j++) {
      result.push(Math.abs(tempA[i] - tempB[j]));
    }
  }
  for (i = 0; i < result.length; i++) {
    if (result[i] == 4) {
      return true;
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // falses
