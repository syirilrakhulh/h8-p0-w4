function graduates(students) {
  // Code disini
  var kelas = {};
  for (var i = 0; i < students.length; i++) {
    var kelasnya = students[i]["class"];
    kelas[kelasnya] = [];
  }
  for (var j = 0; j < students.length; j++) {
    if (students[j]["score"] > 75) {
      var data = {};
      data["name"] = students[j]["name"];
      data["score"] = students[j]["score"];
      kelas[students[j]["class"]].push(data);
    }
    //   // {name : bram, score : 100}
  }
  return kelas;
}

console.log(
  graduates([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes"
    },
    { name: "syiril", score: 85, class: "wolves" },
    {
      name: "Alexei",
      score: 85,
      class: "wolves"
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes"
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves"
    }
  ])
);

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(
  graduates([
    {
      name: "Alexander",
      score: 100,
      class: "foxes"
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves"
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes"
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves"
    },
    {
      name: "Viktor",
      score: 70,
      class: "tigers"
    }
  ])
);

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }

console.log(graduates([])); //{}
