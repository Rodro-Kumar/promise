// promise //

// 1. fulfield 2. rejected 3. pending

// promise creation

// const mypromise = new Promise(function (resolve, rejected) {
//   setTimeout(() => {
//     rejected("your data is not fecthing");
//   }, 100);
// });

// // promise consuming

// mypromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function dataFetcher() {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }

// function display(promiseOneValue) {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       rejected("data is displayed" + promiseOneValue);
//     }, 1000);
//   });
// }

// function masala(msa) {
//   return "our final data is" + msa;
// }

// dataFetcher()
//   .then((string) => {
//     return display(string);
//   })
//   .then((finalValue) => {
//     return finalValue;
//   })
//   .then((finalagainvalue) => {
//     return masala(finalagainvalue);
//   })
//   .then((output) => {
//     console.log(output);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Complete");
//   });

// fetch js api

// const API = "https://dummyjson.com/products";
// fetch(API)
//   .then((data) => {
//     return data;
//   })
//   .then((data) => {
//     return data.json();
//   })
//   .then((jsonData) => {
//     return jsonData.products;
//   })
//   .then((returnData) => {
//     return returnData;
//   })
//   .then((finalData) => {
//     console.log(finalData[0]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function fetchData() {
//   return new Promise(function (resolve, rejected) {
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         resolve(data);
//       });
//   });
// }

// function displayProduct(data) {
//   console.log("our data is : ", data);
// }

// fetchData().then((returnData) => {
//   displayProduct(returnData.products);
// });

// function fun1() {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       resolve("Data fetching done from fun1 ");
//     }, 1000);
//   });
// }

// function fun2(item) {
//   return new Promise((resolve, rejected) => {
//     let status = true;
//     setTimeout(() => {
//       if (status) {
//         resolve(item + "two ");
//       } else {
//         rejected("rejected fun2");
//       }
//     }, 1000);
//   });
// }

// function fun3(item) {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       resolve(item + "three ");
//     }, 1000);
//   });
// }

// fun1()
//   .then((fun1Data) => {
//     return fun1Data;
//   })
//   .then((fun1result) => {
//     return fun2(fun1result);
//   })
//   .then((result2) => {
//     return result2;
//   })
//   .then((restle3) => {
//     return fun3(restle3);
//   })
//   .then((final) => {
//     console.log("final ", final);
//   })
//   .catch((err) => {
//     console.log("our error", err);
//   })
//   .finally(() => {
//     console.log("this is final state");
//   });

// todo: promise
// 1 ==> fullfield
// 2 ==> rejected
// 3 ==> pending

// todo : promise creation
// const myPromise = new Promise(function (resolve, rejected) {
//   setTimeout(() => {
//     resolve("my data");
//   }, 1000);
// });

// // todo : promise consume

// myPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log("data not fetching", err);
//   });

// function dataFecther() {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       resolve("data fetching done");
//     }, 2000);
//   });
// }

// function display(promiseoneValue) {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       resolve("display done" + promiseoneValue);
//     }, 1000);
//   });
// }

// function final(finalData) {
//   return "our final data" + finalData;
// }

// dataFecther()
//   .then((str) => {
//     return display(str);
//   })
//   .then((finalvalue) => {
//     return finalvalue;
//   })
//   .then((finalLast) => {
//     return final(finalLast);
//   })
//   .then((output) => {
//     console.log(output);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("all task complete");
//   });

// // todo : fetch

// const api = "https://dummyjson.com/products";

// fetch(api)
//   .then((response) => {
//     return response;
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((jsonData) => {
//     return jsonData.products;
//   })
//   .then((returnData) => {
//     return returnData;
//   })
//   .then((finalData) => {
//     console.log(finalData[0]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // todo : promise creation

// const myPromise = new Promise(function (resolve, rejected) {
//   setTimeout(() => {
//     resolve("data here");
//   }, 2000);
// });

// // todo : promise consume

// myPromise
//   .then((dta) => {
//     console.log(dta);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// =======================================================

// promise creation

// function dataFetcher() {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       resolve("data fetching done");
//     }, 1000);
//   });
// }

// function display(promiseOneValue) {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       resolve("your data is displayed" + promiseOneValue);
//     }, 1000);
//   });
// }

// function finalData(finalData) {
//   return "our final dtata" + finalData;
// }

// // promise consuming

// dataFetcher()
//   .then((value) => {
//     return display(value);
//   })
//   .then((finalValue) => {
//     return finalValue;
//   })
//   .then((finalAGinvalue) => {
//     return finalData(finalAGinvalue);
//   })
//   .then((returnData) => {
//     console.log(returnData);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("all task complete");
//   });

// ======================================================================

function data() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve("=======> this is my data <=======");
    }, 2000);
  });
}

function diplay() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve("==>> data displayed <<==");
    }, 1000);
  });
}

data()
  .then((dta) => {
    return diplay(dta);
  })
  .then((displayedData) => {
    console.log(displayedData);
  });

// =============================================================

// fetch api

// const api = "https://dummyjson.com/products";

// fetch(api)
//   .then((response) => {
//     return response;
//   })
//   .then((data) => {
//     return data.json();
//   })
//   .then((returnData) => {
//     return returnData.products;
//   })
//   .then((allData) => {
//     console.log(allData[0]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
