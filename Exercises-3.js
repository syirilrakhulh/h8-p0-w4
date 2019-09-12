function cariMedian(arr) {
  // you can only write your code here!
  var nilaiTengah = 0;
  var ganjil = 0;
  if (arr.length % 2 == 0) {
    genap = arr.length / 2;
    // console.log(genap)
    nilaiTengah = (arr[genap] + arr[genap - 1]) / 2;
    return nilaiTengah;
  } else {
    ganjil = Math.floor(arr.length / 2);
    nilaiTengah = arr[ganjil];
    return nilaiTengah;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
