function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  temp = [];
  if (angka == 1) {
    return 2;
  }
  for (i = 0; i <= angka; i++) {
    if (angka % i == 0) {
      temp.push(String(i));
    }
  }
  var kali1 = temp.length / 2 - 1;
  var kali2 = temp.length / 2;
  var digit = [];
  var digit1 = [];
  var digit2 = [];
  var result = [];
  for (i = kali1; i >= 0; i--) {
    digit1.push(temp[i]);
  }
  for (j = kali2; j < temp.length; j++) {
    digit2.push(temp[j]);
  }
  digit.push(digit1, digit2);
  for (i = 0; i < digit1.length; i++) {
    result.push(digit1[i] + digit2[i]);
  }
  minim = result[0].length;
  for (i = 0; i < result.length; i++) {
    if (result[i].length < minim) {
      minim = result.length[i];
    }
  }
  return minim;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
