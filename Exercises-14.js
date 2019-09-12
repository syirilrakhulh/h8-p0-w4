function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  var reportAll = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    var report = {};
    report["penumpang"] = arrPenumpang[i][0];
    report["naikDari"] = arrPenumpang[i][1];
    report["tujuan"] = arrPenumpang[i][2];
    reportAll.push(report);
  }
  for (var i = 0; i < reportAll.length; i++) {
    for (var j = 0; j < rute.length; j++) {
      if (reportAll[i]["naikDari"] == rute[j]) {
        reportAll[i]["dari"] = j;
      }
      if (reportAll[i]["tujuan"] == rute[j]) {
        reportAll[i]["ke"] = j;
      }
      reportAll[i]["bayar"] =
        2000 * (reportAll[i]["ke"] - reportAll[i]["dari"]);
    }
    delete reportAll[i]["dari"];
    delete reportAll[i]["ke"];
  }
  return reportAll;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
