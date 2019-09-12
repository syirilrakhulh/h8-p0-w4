function changeMe(arr) {
  // you can only write your code here!
  var person = {};

  for (var i = 0; i < arr.length; i++) {
    var age = 2019;
    age -= arr[i][3];
    if (arr[i][3] == undefined) {
      age = "Invalid Birth Year";
    }
    person["firstName"] = arr[i][0];
    person["lastName"] = arr[i][1];
    person["gender"] = arr[i][2];
    person["age"] = age;
    console.log(i + 1 + ". " + arr[i][0] + " " + arr[i][1]);
    console.log(person);
  }
}

// TEST CASES
changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
