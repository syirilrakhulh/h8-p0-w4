function cariModus(arr) {
  // you can only write your code here!
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var checker = false;
    for (var j = 0; j < result.length; j++) {
      if (arr[i] === result[j][0]) {
        result[j][1]++;
        checker = true;
      }
    }
    if (checker === false) {
      result.push([arr[i], 1]);
    }
  }
  for (var i = 0; i < result.length; i++) {
    for (var j = i + 1; j < result.length; j++) {
      if (result[i][1] < result[j][1]) {
        var temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }
  if (result[0][1] === 1 || result.length === 1) {
    return -1;
  }
  return result[0][0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
