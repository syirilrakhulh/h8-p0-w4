function ubahHuruf(kata) {
  // you can only write your code here!
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var temp = "";
  for (j = 0; j < kata.length; j++) {
    for (i = 0; i < alphabet.length; i++) {
      if (kata[j] == alphabet[i]) {
        if (alphabet[i + 1] == undefined) {
          temp += alphabet[0];
        } else {
          temp += alphabet[i + 1];
        }
      }
    }
  }
  return temp;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfm/pqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
