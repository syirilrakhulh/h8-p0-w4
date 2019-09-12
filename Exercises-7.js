function urutkanAbjad(str) {
  // you can only write your code here!
  var abjad = "abcdefghijklmnopqrstuvwxyz";
  var temp = "";
  for (i = 0; i < abjad.length; i++) {
    for (j = 0; j < str.length; j++) {
      if (str[j] == abjad[i]) {
        temp += abjad[i];
      }
    }
  }
  return temp;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
