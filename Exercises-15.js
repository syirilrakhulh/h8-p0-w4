function highestScore(students) {
  // Code disini

  // var kelas = {};
  // for (var i = 0; i < students.length; i++) {
  //   for (var j = 0; j < students.length; j++) {
  //     if (
  //       students[i]["score"] < students[j]["score"] &&
  //       students[i]["class"] == students[j]["class"]
  //     ) {
  //       var temp = students[j];
  //       students[j] = students[i];
  //       students[i] = temp;
  //     }
  //   }
  // }
  // console.log(students);
  // for (var i = 0; i < students.length; i++) {
  //   var data = {
  //     name: students[i]["name"],
  //     score: students[i]["score"]
  //   };
  //   kelas[students[i]["class"]] = data;
  // }
  // return kelas;
  var kelas = [];
  for (var i = 0; i < students.length; i++) {
    var udahAda = false;
    for (var j = 0; j < kelas.length; j++) {
      if (students[i]["class"] == kelas[j]) {
        udahAda = true;
      }
    }
    if (udahAda == false) {
      kelas.push(students[i]["class"]);
    }
  }
  var tertinggi = [];
  for (var i = 0; i < kelas.length; i++) {
    for (var j = 0; j < students.length; j++) {
      if (students[j]["class"] == kelas[i]) {
        if (tertinggi[i] == undefined) {
          tertinggi[i] = [];
          tertinggi[i].push(students[j]["name"], students[j]["score"]);
        }
        if (tertinggi[i][1] < students[j]["score"]) {
          tertinggi[i][0] = students[j]["name"];
          tertinggi[i][1] = students[j]["score"];
        }
      }
    }
  }
  console.log(kelas);
  console.log(tertinggi);
  var result = {};
  for (var i = 0; i < kelas.length; i++) {
    var data = {};
    data["name"] = tertinggi[i][0];
    data["score"] = tertinggi[i][1];
    result[kelas[i]] = data;
  }
  return result;
}

// TEST CASE
console.log(
  highestScore([
    {
      name: "Dimitri",
      score: 70,
      class: "foxes"
    },
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
//   foxes: { name: 'Dimitri', score: 90 }
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
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
      score: 80,
      class: "tigers"
    }
  ])
);
// ['foxes', 'wolves', 'tigers']
// ['Alexander','Alisa']
// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
