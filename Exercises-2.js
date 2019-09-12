function fpb(angka1, angka2) {
  // you can only write your code here!
  var fpbAngka1 = [];
  var fpbAngka2 = [];
  var sama = [];
  for (i = 1; i <= angka1; i++) {
    if (angka1 % i == 0) {
      fpbAngka1.push(i);
    }
  }
  for (i = 1; i <= angka2; i++) {
    if (angka2 % i == 0) {
      fpbAngka2.push(i);
    }
  }
  for (i = 0; i < fpbAngka1.length; i++) {
    for (j = 0; j < fpbAngka2.length; j++) {
      if (fpbAngka1[i] == fpbAngka2[j]) {
        sama.push(fpbAngka1[i]);
      }
    }
  }
  var max = sama[0];
  for (i = 0; i < sama.length; i++) {
    if (sama[i] > max) {
      max = sama[i];
    }
  }
  return max;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
