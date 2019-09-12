function countProfit(shoppers) {
  let listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1]
  ];
  var output = [];
  for (var i = 0; i < listBarang.length; i++) {
    var objek = {};
    objek["product"] = listBarang[i][0];
    objek["shoppers"] = [];
    objek["leftOver"] = listBarang[i][2];
    objek["harga"] = listBarang[i][1];
    objek["totalProfit"] = 0;
    objek["sold"] = 0;
    output.push(objek);
  }
  for (var i = 0; i < shoppers.length; i++) {
    for (var j = 0; j < output.length; j++) {
      if (output[j]["product"] == shoppers[i]["product"]) {
        if (output[j]["leftOver"] - shoppers[i]["amount"] >= 0) {
          output[j]["shoppers"].push(shoppers[i]["name"]);
          output[j]["leftOver"] -= shoppers[i]["amount"];
          output[j]["sold"] += shoppers[i]["amount"];
        }
      }
    }
  }
  for (var i = 0; i < output.length; i++) {
    output[i]["totalProfit"] = output[i]["harga"] * output[i]["sold"];
    delete output[i]["harga"];
    delete output[i]["sold"];
  }
  return output;
  // you can only write your code here!
}

// TEST CASES
console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 }
  ])
);
[
  {
    product: "Sepatu Stacattu",
    shoppers: ["Windi", "Vanessa"],
    leftOver: 5,
    totalProfit: 7500000
  },
  { product: "Baju Zoro", shoppers: [], leftOver: 2, totalProfit: 0 },
  { product: "Sweater Uniklooh", shoppers: [], leftOver: 1, totalProfit: 0 }
];

console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
    { name: "Devi", product: "Baju Zoro", amount: 1 },
    { name: "Lisa", product: "Baju Zoro", amount: 1 }
  ])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(
  countProfit([{ name: "Windi", product: "Sepatu Naiki", amount: 5 }])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
